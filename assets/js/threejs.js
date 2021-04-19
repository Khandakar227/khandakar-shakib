
        // Find the latest version by visiting https://unpkg.com/three.
        import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
        import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
            
        //Three JS camera setup
        const FieldOfView = 75;
        const AspectRatio = window.innerWidth/(window.innerHeight);  // the canvas default
        const Near = 0.1;
        const Far = 1000;

        //Height,Width, Depth of the Box
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
    
        const canvas = document.querySelector('#canvas');
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
        
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.getElementById('canvas-container').appendChild(renderer.domElement)

        console.log(renderer)
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(FieldOfView, AspectRatio, Near, Far);

        //Orbit Controls
        let controls = new OrbitControls( camera, renderer.domElement );
        //Camera position
        camera.position.z = 2.5;
        controls.update();

        const geometry = new THREE.SphereBufferGeometry( .7, 32, 32 );

        const texture = new THREE.TextureLoader().load('./assets/img/NormalMap.png')
        const material = new THREE.MeshStandardMaterial({color: 'white'});
        material.roughness = .2
        material.metalness = .9
        material.normalMap = texture

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        console.log(sphere)
        renderer.render(scene,camera);

        const windowX = window.innerWidth/2
        const windowY = window.innerHeight/2

        let mouseX = 0;
        let mouseY = 0;

        let targetX = 0;
        let targetY = 0;;

        
        const onDraggingSphere=(e)=>{
            mouseX = (e.clientX-windowX)
            mouseY = (e.clientY-windowY)
        }

        document.addEventListener('mousemove', onDraggingSphere)

        function animate(){
        targetX = mouseX*.006
        targetY = mouseY*.002
        const time = 0.01

        sphere.rotation.y += time; 
        sphere.rotation.z += time*(targetY-sphere.rotation.x)
        sphere.rotation.y += time*(targetX-sphere.rotation.x)
        sphere.rotation.x += time*(targetY-sphere.rotation.x)
        requestAnimationFrame(animate);            
        renderer.render(scene, camera); 
        }

        function onWindowResize(){
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }

        animate()

        window.addEventListener('resize', onWindowResize)

        const light = new THREE.PointLight( 'crimson', 10 );
        light.position.set(-1.86,1,-1.65);
        scene.add(light);

        const light2 = new THREE.PointLight( 'crimson', 10 );
        light2.position.set(1.6,-1.52,-1.6);
        scene.add(light2);
       
