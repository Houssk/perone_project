/**
 * @author Houssam KARRACH
 * @define Main qui fait le traitement de la perone qui permet de selectionner 
 *         2 parties de la perone, ensuite on change la couleur de toute la partie entre les 2 objets séléctionnés
 */
/**
 * Initialisation des variables
 */
var renderer_perone , scene_perone , camera_perone  , geometry_perone , controls_perone, mesh ,raycaster,mousevar ,intersected;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var groupe = new THREE.Object3D();
var objects = [];
var number_perone = [];
var number_vide = [];
var intersectColor = 0x00D66B;
var baseColor = 0xFFFFFF;
var foundColor = 0x12C0E3;
var selectionner = false;
/**
     * Remplacer ;
     *  width_div : width du div perone
     *  height_div  : height du div perone
     */
var width_div = document.getElementById("perone").clientWidth;
var height_div = 600;
/**
 * @function : permet l'initialisation de la scène et le chargement de l'image
 * @description : utilisation de la fonction affichageperone() pour  l'affichage de 16 objets de la perones
 */
function init() { 
     /**
     * delete cookies
     */
     deleteCookie("min_of_array_perone");
     deleteCookie("max_of_array_perone");
    /**
     * Initialisation du render 
     */
    renderer_perone = new THREE.WebGLRenderer({antialias: true});
    renderer_perone.setPixelRatio(window.devicePixelRatio);  
    renderer_perone.setSize(width_div, height_div);
    renderer_perone.setClearColor(0x424243);
    document.getElementById("perone").appendChild(renderer_perone.domElement);
   /**
    * Initialisation de la scene_perone
    */
    scene_perone = new THREE.Scene();
    var ambient = new THREE.AmbientLight(0x404040,1);
    scene_perone.add(ambient);    
    var hemiLight =  new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    hemiLight.color.set(0xd3d3d3);
	hemiLight.groundColor.setHSL( 0, 0, 0 );
	scene_perone.add( hemiLight );
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( -50, -50, -20 );
    scene_perone.add( directionalLight );
   /**
    * Initialisation du camera_perone
    */
    camera_perone = new THREE.PerspectiveCamera( 50, width_div / height_div, 1, 20000 );
        camera_perone.position.z = 480;
        camera_perone.position.y = 0;
        camera_perone.position.x = 0;
        scene_perone.add(camera_perone);   
        affichageperone();  

     window.addEventListener('resize', onWindowResize, false);  
     window.addEventListener( 'click', onMouseMove, false );
}
/**
 * @description: permet de gérer les evenements de la souris
 */
function onMouseMove( event ) {
    
    var perone =  $("#perone");
   // console.log('perone.left,perone.top',perone.offset().left,perone.offset().top);
	mouse.x =  ( (event.clientX - perone.offset().left) / perone.width() ) * 2 - 1;
	mouse.y = - ( (event.clientY- perone.offset().top ) / perone.height()) * 2 + 1;	

/*  console.log("mouse.x , mouse.y ",mouse.x,mouse.y);
    console.log("event.clientX , event.clientY",event.clientX,event.clientY);
    console.log("renderer_perone.domElement.width,renderer_perone.domElement.height ",renderer_perone.domElement.width,renderer_perone.domElement.height );*/

    raycaster.setFromCamera( mouse, camera_perone );
    var intersections = raycaster.intersectObjects( objects );
	if ( intersections.length > 0 ) {
				if ( intersected != intersections[ 0 ].object ) {
                    if (selectionner) {
                        for(i=0 ;i<objects.length;i++){               
                            objects[i].material.color.setHex(baseColor);
                        }
                    }
					intersected = intersections[ 0 ].object;
					intersected.material.color.setHex( intersectColor );
                    number_perone.push(intersected.name);
				}
				document.body.style.cursor = 'pointer';
			}
			else if ( intersected ) {
				intersected = null;
				document.body.style.cursor = 'auto';     
			}  
    if(number_perone.length==2){
        selectionner = true;
         var max_of_array = Math.max.apply(Math, number_perone);
         var min_of_array = Math.min.apply(Math, number_perone); 
         //console.log("min_of_array",min_of_array,"max_of_array",max_of_array) ; 
        // sessionStorage.setItem("min_of_array",min_of_array);
        // sessionStorage.setItem("max_of_array",max_of_array); 
         createCookie("min_of_array_perone",min_of_array,1);
         createCookie("max_of_array_perone",max_of_array,1); 
         var min = min_of_array-1;
         var max = max_of_array-1; 
        // console.log("min",min,"max",max) ; 
        for (var i = 0; i < objects.length ; i++) {        
               if(objects[i].name>=min_of_array && objects[i].name<=max_of_array){
                    objects[i].material.color.setHex( 0xff6954 );
               }
               else{
                   number_vide.push(objects[i].name); 
                    objects[i].material.color.setHex( 0xffffff );        
                   }                    
         }
        //console.log(peroneMaxMin());
       while(number_perone.length>0) number_perone.pop();
        }
    }
/**
 * @description : permet de reduire la taille de l'objet en fonction de la taille de l'ecran
 */
function onWindowResize() {
		    windowHalfX = width_div / 2;
		    windowHalfY = height_div/ 2;
		    camera_perone.aspect = width_div / height_div;
		    camera_perone.updateProjectionMatrix();
		    renderer_perone.setSize(width_div, height_div);
		}
/**
 * @description : permet de boucler infinement la scene_perone 
 */
function render(){
    controls_perone.update();
	requestAnimationFrame(render);
	renderer_perone.render(scene_perone,camera_perone);	
}
init();
render();
