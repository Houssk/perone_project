/**
 * @author Houssam KARARCH
 * affichageperoneV2() à modifier problème du nom de la mesh
*/
 function affichageperoneV2(){
           var array = peroneMaxMin();
           var max = array[0];
           var min = array[1];
           var manager = new THREE.LoadingManager();
                        manager.onProgress = function ( item, loaded, total ) {
                            console.log( item, loaded, total );
                        };
            var onProgress = function ( xhr ) {
                            if ( xhr.lengthComputable ) {
                                var percentComplete = xhr.loaded / xhr.total * 100;
                                console.log( Math.round(percentComplete, 2) + '% downloaded' );
                            }
                        };
            var onError = function ( xhr ) {
                        };
            controls =  new THREE.OrbitControls( camera , renderer.domElement);
            var loader = new THREE.OBJLoader(manager);
            var compteur = 1;
            for(var i=1 ; i<=26 ; i++){
                name_mesh= "img/perone_"+i+".obj";
                loader.load(name_mesh, function(object){
                object.traverse( function (child) {
                    if( child instanceof THREE.Mesh){
                         
                        geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                        mesh = new THREE.Mesh(geometry, child.material );                    
                        console.log("compteur , max , min" ,compteur , max , min);                    
                        mesh.rotation.set(0,0,-Math.PI/2);
                        objects.push(mesh);
                        scene.add(mesh);
                      }
                   
                    })
                     console.log('objects',objects);
                     
                        if( compteur >= min && compteur <=max )  { 
                            
                             objects[compteur-1].material.color.setHex( 0xf98658 );
                             console.log("compteur",compteur);

                        }
                        else if(  compteur > max  ) {

                             objects[compteur-1].material.color.setHex( 0xFFffff);
                             console.log("non compteur",compteur);

                        }
                        else if (compteur < min){

                             objects[compteur-1].material.color.setHex( 0xFFffff);
                             console.log("non compteur",compteur);
                        }
                        compteur++;
                 })
              }
               
          }
 /**
  * @author Houssam KARRACH
  * @param URl des differents objets  dans le dossier img
  * @description : affichage des différentes parties de la perone
  */
    function affichageperone(){
    var manager = new THREE.LoadingManager();
                manager.onProgress = function ( item, loaded, total ) {
                    console.log( item, loaded, total );
                };

    var onProgress = function ( xhr ) {
                    if ( xhr.lengthComputable ) {
                        var percentComplete = xhr.loaded / xhr.total * 100;
                        console.log( Math.round(percentComplete, 2) + '% downloaded' );
                    }
                };

    var onError = function ( xhr ) {
                };

    controls =  new THREE.OrbitControls( camera , renderer.domElement);
    var loader = new THREE.OBJLoader(manager);

    loader.load("img/perone_1.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh1 = new THREE.Mesh(geometry, child.material );
                 mesh1.name = 1;
                 mesh1.position.z = 0;
                 mesh1.rotation.set(0,0,-Math.PI/2);
                 var material_text = new THREE.MeshPhongMaterial({ color: 0xdddddd    });
                 var text = new THREE.TextGeometry( "4mm" , { size: 60,
    height: 20,
    curveSegments: 3,
    font: 'helvetiker',
    weight: 'normal',
    bevelThickness: 3,
    bevelSize: 3,
    bevelEnabled: true} );
                 var textMesh = new THREE.Mesh( text, material_text );
                 scene.add(textMesh);
                // objects.push(mesh1);
                 groupe.add(mesh1);
                 scene.add(mesh1);
            }
         })
        })
        loader.load("img/perone_2.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh2 = new THREE.Mesh(geometry, child.material );
                 mesh2.name = 2;
                  mesh2.position.z = 0;
                 mesh2.rotation.set(0,0,-Math.PI/2);
                // objects.push(mesh2);
                 groupe.add(mesh2);
                 scene.add(mesh2);
            }
         })
        })
        loader.load("img/perone_3.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh3 = new THREE.Mesh(geometry, child.material );
                 mesh3.name = 3;
                 mesh3.position.z = 0;
                 mesh3.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh3);
                 groupe.add(mesh3);
                 scene.add(mesh3);
            }
         })
        })
        loader.load("img/perone_4.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh4 = new THREE.Mesh(geometry, child.material );
                 mesh4.name = 4;
                  mesh4.position.z = 0;
                mesh4.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh4);
                 groupe.add(mesh4);
                 scene.add(mesh4);
            }
         })
        })
        loader.load("img/perone_5.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh5 = new THREE.Mesh(geometry, child.material );
                 mesh5.name = 5;
                  mesh5.position.z = 0;
               mesh5.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh5);
                 groupe.add(mesh5);
                 scene.add(mesh5);
            }
         })
        })
        loader.load("img/perone_6.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh6 = new THREE.Mesh(geometry, child.material );
                 mesh6.name = 6;
                  mesh6.position.z = 0;
                 mesh6.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh6);
                 groupe.add(mesh6);
                 scene.add(mesh6);
            }
         })
        })
        loader.load("img/perone_7.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh7 = new THREE.Mesh(geometry, child.material );
                 mesh7.name = 7;
                  mesh7.position.z = 0;
                 mesh7.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh7);
                 groupe.add(mesh7);
                 scene.add(mesh7);
            }
         })
        })
        loader.load("img/perone_8.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh8 = new THREE.Mesh(geometry, child.material );
                 mesh8.name = 8;
                  mesh8.position.z = 0;
                mesh8.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh8);
                 groupe.add(mesh8);
                 scene.add(mesh8);
            }
         })
        })
        loader.load("img/perone_9.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh9 = new THREE.Mesh(geometry, child.material );
                 mesh9.name = 9;
                  mesh9.position.z = 0;
                 mesh9.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh9);
                 groupe.add(mesh9);
                 scene.add(mesh9);
            }
         })
        })
        loader.load("img/perone_10.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh10 = new THREE.Mesh(geometry, child.material );
                 mesh10.name = 10;
                  mesh10.position.z = 0;
                 mesh10.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh10);
                 groupe.add(mesh10);
                 scene.add(mesh10);
            }
         })
        })
        loader.load("img/perone_11.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh11 = new THREE.Mesh(geometry, child.material );
                 mesh11.name =11;
                  mesh11.position.z = 0;
                 mesh11.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh11);
                 groupe.add(mesh11);
                 scene.add(mesh11);
            }
         })
        })
        loader.load("img/perone_12.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh12 = new THREE.Mesh(geometry, child.material );
                 mesh12.name = 12;
                 mesh12.position.z = 0;
                 mesh12.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh12);
                 groupe.add(mesh12);
                 scene.add(mesh12);
            }
         })
        })
        loader.load("img/perone_13.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh13 = new THREE.Mesh(geometry, child.material );
                 mesh13.name = 13;
                  mesh13.position.z = 0;
                 mesh13.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh13);
                 groupe.add(mesh13);
                 scene.add(mesh13);
            }
         })
        })
        loader.load("img/perone_14.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh14 = new THREE.Mesh(geometry, child.material );
                 mesh14.name = 14;
                  mesh14.position.z = 0;
                 mesh14.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh14);
                 groupe.add(mesh14);
                 scene.add(mesh14);
            }
         })
        })
        loader.load("img/perone_15.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh15 = new THREE.Mesh(geometry, child.material );
                 mesh15.name = 15;
                  mesh15.position.z = 0;
                 mesh15.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh15);
                 groupe.add(mesh15);
                 scene.add(mesh15);
            }
         })
        })
        loader.load("img/perone_16.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh16 = new THREE.Mesh(geometry, child.material );
                 mesh16.name = 16;
                  mesh16.position.z = 0;
                 mesh16.rotation.set(0,0,-Math.PI/2);
                 objects.push(mesh16);
                 groupe.add(mesh16);
                 scene.add(mesh16);
            }
         })
        })
        loader.load("img/perone_17.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh17 = new THREE.Mesh(geometry, child.material );
                 mesh17.name = 17;
                mesh17.position.z = 0;
                mesh17.rotation.set(0,0,-Math.PI/2);
               //  objects.push(mesh17);
                 groupe.add(mesh17);
                 scene.add(mesh17);
            }
         })
        })
         loader.load("img/perone_18.obj", function(object){
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh18 = new THREE.Mesh(geometry, child.material );
                 mesh18.name = 18;
                  mesh18.position.z = 0;
                 mesh18.rotation.set(0,0,-Math.PI/2);
                 //objects.push(mesh18);
                 groupe.add(mesh18);
                 scene.add(mesh18);
            }
         })
        })
      
}
/**
 * @description: Fonction qui permet de récupérer le début et la fin de la perone
 * @return max and min array
 */
function peroneMaxMin(){
   var array =[];
   var max = sessionStorage.getItem("max_of_array");
   var min = sessionStorage.getItem("min_of_array");
   array = [max,min];
   return array;
}
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};