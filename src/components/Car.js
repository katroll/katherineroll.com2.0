import "../index.css"
import React, { Component } from "react";
import { gsap } from "gsap/dist/gsap";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'; 

class Car extends Component {

  constructor() {
    super();
    this.scene = null;
    this.renderer = null;
  }

    componentDidMount() {

        //const gui = new GUI({ close: true, width: 400 });

        const parameters = {
            color: 0xff0000,
        }
        
    
        
        //axis helper
        // const axesHelper = new THREE.AxesHelper(3);
        // scene.add(axesHelper);
        

        //scene
        this.scene = new THREE.Scene();

        /**
         * Objects
         */
        
        const planeMaterial = new THREE.MeshStandardMaterial();
        planeMaterial.roughness = .9;
        
        planeMaterial.color = new THREE.Color("#016304");
        const planeGeometry = new THREE.PlaneGeometry(100,100,100);
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -1;
        plane.rotation.x = - Math.PI / 2;
        this.scene.add(plane);
        
        const roadMaterial = new THREE.MeshStandardMaterial({ color: "#6b3200"});
        
        const road1 = new THREE.Mesh(
            new THREE.PlaneGeometry(1.6, 50),
            roadMaterial
        );
        
        road1.position.set(0.3, -0.99, 0);
        road1.rotation.x = - Math.PI / 2;
        this.scene.add(road1);
        
        //gui.add(road1.rotation, "x").min(- Math.PI / 2).max(Math.PI / 2).step(0.001).name("road1 rotation");
        
        
        const road2 = new THREE.Mesh(
            new THREE.PlaneGeometry(1.6, 60),
            roadMaterial
        );
        
        road2.position.set(0.3, -0.99, 0);
        road2.rotation.x = - Math.PI / 2;
        road2.rotation.z = - 0.8;
        this.scene.add(road2);
        
        // gui.add(road2.rotation, "x").min(- Math.PI / 2).max(Math.PI / 2).step(0.001).name("road2 rotation x");
        // gui.add(road2.rotation, "y").min(- Math.PI / 2).max(Math.PI / 2).step(0.001).name("road2 rotation y");
        // gui.add(road2.rotation, "z").min(- Math.PI / 2).max(Math.PI / 2).step(0.001).name("road2 rotation z");
        
        
        // gui.addColor(parameters, 'color').onChange(() => {
        //     planeMaterial.color.set(parameters.color)
        //     }).name("plane color")
         
        const movingCubeMaterial = new THREE.MeshStandardMaterial();
        movingCubeMaterial.roughness = 0.5;
        movingCubeMaterial.color.set("silver");
        
        
        //car object
        const car = new THREE.Group();
        
        const carMaterial = new THREE.MeshStandardMaterial({ color: "cccccc" })
        carMaterial.roughness = 0.2;
        
        const mainBody = new THREE.Mesh(
            new THREE.BoxGeometry(.4, 0.25, 0.4),
            carMaterial
        )
        mainBody.position.z = 0.131;
        mainBody.position.y = 0.05;
        //gui.add(mainBody.position, "z").min(0.07).max(0.15).step(0.001).name("main body z position")
        
        const trunk = new THREE.Mesh(
            new THREE.BoxGeometry(.4, 0.158, 0.35),
            carMaterial
        )
        
        trunk.position.set(0, 0.004, -0.179)
        
        // gui.add(trunk.position, "y").min(0).max(0.1).step(0.001).name("trunk y position")
        // gui.add(trunk.position, "z").min(-0.5).max(0).step(0.001).name("trunk z position")
        
        const underBackWindshield = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.133, 0.2),
            carMaterial
        )
        
        underBackWindshield.position.set(0, 0.068, -0.128);
        underBackWindshield.rotation.x = -0.472;
        
        // gui.add(underBackWindshield.position, "y").min(0).max(0.1).step(0.001).name("underBackWindshield y position")
        // gui.add(underBackWindshield.position, "z").min(-0.25).max(0).step(0.001).name("underBackWindshield z position")
        // gui.add(underBackWindshield.rotation, "x").min(-0.6).max(0).step(0.001).name("underBackWindshield x rotation")
        
        const backWindshield = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.001, 0.13),
            new THREE.MeshStandardMaterial({ color: "#0abcf2" })
        )
        backWindshield.position.y = 0.143;
        backWindshield.position.z = -0.128;
        backWindshield.rotation.x = -0.472;
        
        //gui.add(backWindshield.position, "y").min(0.1).max(0.168).step(0.001).name("BackWindshield y position")
        
        
        
        const carFront = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.09, 0.4),
            carMaterial
        )
        carFront.position.y = -0.025;
        carFront.position.z = 0.497
        
        //gui.add(carFront.position, "z").min(0.4).max(0.6).step(0.001).name("carfront z position")
        
        const underWindshield = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.128, 0.22),
            carMaterial
        )
        underWindshield.position.y = 0.061;
        underWindshield.position.z = 0.392;
        underWindshield.rotation.x = 0.5555;
        
        //gui.add(underWindshield.position, "y").min(0).max(0.1).step(0.001).name("under windsield y position")
        //gui.add(underWindshield.position, "z").min(0.3).max(0.5).step(0.001).name("under windsield z position")
        
        const windshield = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.001, 0.2),
            new THREE.MeshStandardMaterial({ color: "#0abcf2" })
        )
        windshield.position.y = 0.121;
        windshield.position.z = 0.417;
        windshield.rotation.x = 0.5555;
        
        // gui.addColor(parameters, 'color').onChange(() => {
        //     carMaterial.color.set(parameters.color)
        //     }).name("car color")
        
        // gui.add(windshield.position, "y").min(0.1).max(0.2).step(0.001).name("windsield y position")
        // gui.add(windshield.position, "z").min(0.3).max(0.5).step(0.001).name("windsield z position")
        
        const hood = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.08, 0.23),
            carMaterial
        )
        hood.position.y = 0.004;
        hood.position.z = 0.588;
        hood.rotation.x = 0.187;
        
        // gui.add(hood.position, "y").min(-0.01).max(0.1).step(0.001).name("hood y position")
        // gui.add(hood.position, "z").min(0.5).max(0.7).step(0.001).name("hood z position")
        //gui.add(hood.rotation, "x").min(0).max(0.5).step(0.001).name("hood x rotation")
        
        //wheels
        
        const wheelGeometry = new THREE.CylinderGeometry(0.07, 0.07, 0.01, 32);
        const wheelMaterial = new THREE.MeshStandardMaterial({ color: "black" });
        
        const flWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        flWheel.position.set(0.206, -0.041, 0.5);
        flWheel.rotation.z = Math.PI / 2;
        
        
        // gui.add(flWheel.position, "x").min(0).max(0.25).step(0.001).name("flwheel x position")
        // gui.add(flWheel.position, "y").min(-0.15).max(0).step(0.001).name("flwheel y position")
        // gui.add(flWheel.position, "z").min(0.35).max(0.5).step(0.001).name("flwheel z position")
        
        const frWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        frWheel.position.set(-0.206, -0.041, 0.5);
        frWheel.rotation.z = Math.PI / 2;
        
        
        const brWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        brWheel.position.set(-0.206, -0.041, -0.158);
        brWheel.rotation.z = Math.PI / 2;
        
        //gui.add(brWheel.position, "z").min(-0.28).max(0).step(0.001).name("brwheel z position")
        
        const blWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        blWheel.position.set(0.206, -0.041, -0.158);
        blWheel.rotation.z = Math.PI / 2;
        
        
        //carlights
        
        const flHeadLight = new THREE.SpotLight(0x78ff00, 6, 6, Math.PI * 0.1, 1, 2);
        flHeadLight.position.set(0.12, 0, 0.5);
        flHeadLight.target.position.x = 0.15 
        flHeadLight.target.position.y = -0.07
        flHeadLight.target.position.z = 2
        car.add(flHeadLight);
        car.add(flHeadLight.target);
        
        const frHeadLight = new THREE.SpotLight(0x78ff00, 6, 6, Math.PI * 0.1, 1, 2);
        frHeadLight.position.set(-0.1, 0, 0.5);
        frHeadLight.target.position.x = -0.1 
        frHeadLight.target.position.y = -0.07
        frHeadLight.target.position.z = 2
        car.add(frHeadLight);
        car.add(frHeadLight.target);
        
        car.add(hood);
        car.add(backWindshield);
        car.add(underBackWindshield);
        car.add(trunk);
        car.add(underWindshield);
        car.add(windshield);
        car.add(mainBody);
        car.add(carFront);
        car.add(flWheel);
        car.add(frWheel);
        car.add(brWheel);
        car.add(blWheel);
        
        car.position.y = -0.887
        //gui.add(car.position, "y").min(-1).max(-0.8).step(0.001).name("car y position")
        
        this.scene.add(car);
        
        
        // fences
        
        const fenceMaterial = new THREE.MeshStandardMaterial();
        fenceMaterial.color.set("#b5853e")
        
        const topRail1 = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 30, 20),
            fenceMaterial
        )
        topRail1.position.set(1.5, -0.8, 18);
        topRail1.rotation.x = Math.PI / 2;
        this.scene.add(topRail1);
        
        const bottomRail1 = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 30, 20),
            fenceMaterial
        )
        bottomRail1.position.set(1.5, -0.93, 18);
        bottomRail1.rotation.x = Math.PI / 2;
        this.scene.add(bottomRail1);
        
        
        let zStart = 3;
        for(let i = 0; i < 7; i++) {
            const post = new THREE.Mesh(
                new THREE.CylinderGeometry(0.02, 0.02, 0.3, 20),
                fenceMaterial
            )
            post.position.set(1.5, -0.9, zStart);
            this.scene.add(post);
            zStart += 5
        }
        
        const topRail2 = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 10, 20),
            fenceMaterial
        )
        topRail2.position.set(6.5, -0.8, 3);
        topRail2.rotation.z = Math.PI / 2;
        this.scene.add(topRail2);
        
        const bottomRail2 = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 10, 20),
            fenceMaterial
        )
        bottomRail2.position.set(6.5, -0.93, 3);
        bottomRail2.rotation.z = Math.PI / 2;
        this.scene.add(bottomRail2);
        
        let xStart = 6.5;
        for(let i = 0; i < 2; i++) {
            const post = new THREE.Mesh(
                new THREE.CylinderGeometry(0.02, 0.02, 0.3, 20),
                fenceMaterial
            )
            post.position.set(xStart, -0.9, 3);
            this.scene.add(post);
            xStart += 5
        }
        
        
        
        //Buildings
        
        const cubeMaterial = new THREE.MeshStandardMaterial();
        cubeMaterial.color.set("#1c1c1c");
        
        // gui.addColor(parameters, 'color').onChange(() => {
        //     cubeMaterial.color.set(parameters.color)
        //     }).name("cube color")
        
        
        const house1 =  new THREE.Group();
        const house1Walls = new THREE.Mesh(
            new THREE.BoxGeometry(1.3, 1.3, 2),
            new THREE.MeshStandardMaterial({ color: "pink" })
        )
        
        const house1Roof = new THREE.Mesh(
            new THREE.CylinderGeometry(1, 1, 2, 3),
            new THREE.MeshStandardMaterial({ color: "#383837" })
        )
        house1Roof.rotation.x = - Math.PI / 2;
        house1Roof.position.set(0, 1.15, 0);
        
        const house1Door = new THREE.Mesh(
            new THREE.PlaneGeometry(0.5, 0.25),
            new THREE.MeshStandardMaterial({ color: "#f5b67f" })
        )
        house1Door.rotation.x = - Math.PI / 2;
        house1Door.rotation.y = Math.PI / 2;
        house1Door.position.set(0.652, -0.25, 0);
        
        
        house1.add(house1Roof);
        house1.add(house1Walls);
        house1.add(house1Door);
        
        house1.position.set(-6, -0.5, 1);
        house1.rotation.y = -0.8;
        this.scene.add(house1);
        
        
        const house2Material = new THREE.MeshStandardMaterial();
        house2Material.color.set("#000e75");
        
        const house2 = new THREE.Mesh(
            new THREE.BoxGeometry(4, 1.5, 3),
            house2Material
        )
        house2.position.set(-1, -0.25 , 30)
        this.scene.add(house2);
        
        
        const house3Material = new THREE.MeshStandardMaterial();
        house3Material.color.set("#780101");
        
        const house3 = new THREE.Mesh(
            new THREE.BoxGeometry(4, 1.5, 3),
            house3Material
        )
        house3.position.set(7 , -0.25 , 0.5)
        this.scene.add(house3);
        
        
        
        
        const diamondGeometry = new THREE.OctahedronGeometry(0.1, 0);
        const diamondMaterial = new THREE.MeshNormalMaterial();
        const diamonds = new THREE.Group();
        
        for(let i = 0; i < 1500; i++){
            const diamond = new THREE.Mesh(diamondGeometry, diamondMaterial);
        
            diamond.position.x = (Math.random() - 0.5) * 80;
            diamond.position.y = (Math.random() + 2) * 5;
            diamond.position.z = (Math.random() - 0.5) * 80;
        
            diamond.rotation.x = Math.random() * Math.PI
            diamond.rotation.y = Math.random() * Math.PI
        
            diamonds.add(diamond);
        }
        
        this.scene.add(diamonds);
        
        
        /**
         * Sizes
         */
         const sizes = {
            width: window.innerWidth * .9,
            height: window.innerHeight *.9
        }
        
        //Lights 
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);
        
        
        
        const pointLight = new THREE.PointLight("#6696ff", 0.6);
        pointLight.position.x = 3;
        pointLight.position.y = 2;
        pointLight.position.z = 4;
        this.scene.add(pointLight);
        
        /**
         * Camera
         */
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.set( 0, 0.8, 0 );
        this.scene.add(camera)
        
        camera.lookAt( this.scene.position );
        
        
        
        /**
         * Renderer
         */
        
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(sizes.width * .9, sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
        this.mount.appendChild( this.renderer.domElement );

         //controls

         const canvas = document.querySelector("#three > canvas");
         console.log(canvas);
         const controls = new OrbitControls(camera, canvas);
         controls.enableDamping = true;
         //controls.enableKeys = false;
         
         //controls.target = house1.position;
         
        
        
        
        //controls for steering 
        
        let speed = 0.0;
        let stop = 1;
        let DEGTORAD = 0.01745327;
        let temp = new THREE.Vector3;
        let dir = new THREE.Vector3;
        let a = new THREE.Vector3;
        let b = new THREE.Vector3;
        let velocity = 0.0;
        const coronaSafetyDistance = 1.5;
        
        const goal = new THREE.Object3D;
        const follow = new THREE.Object3D;
        follow.position.z = -coronaSafetyDistance;
        car.add( follow );
        goal.add( camera );
        
        const keys = {
            ArrowLeft: false,
            ArrowDown: false,
            ArrowRight: false,
            ArrowUp: false
          };
        
        document.body.addEventListener( 'keydown', (e) => {
            e.preventDefault();
            const key = e.code;
            if ( keys[ key ] !== undefined )
              keys[ key ] = true;
        
            if(key === "Space") {
                gsap.to(car.position, { duration: 1, delay: 0, y: carFront.position.y + 1 })
                gsap.to(car.position, { duration: 1, delay: 1, y: 0.05 })
            }
                   
        });
        
        document.body.addEventListener( 'keyup', function(e) {
            const key = e.code;
            if ( keys[ key ] !== undefined )
              keys[ key ] = false;
          });
        
        
        const tick = () =>
        {
            requestAnimationFrame( tick );
            
          speed = 0.0;
          
          if ( keys.ArrowUp )
            speed = 0.05;
          else if ( keys.ArrowDown )
            speed = -0.05;
        
          velocity += ( speed - velocity ) * .3;
          car.translateZ( velocity );
        
          if ( keys.ArrowLeft )
            car.rotateY(0.03);
          else if ( keys.ArrowRight )
            car.rotateY(-0.03);
                
          
          a.lerp(car.position, 0.4);
          b.copy(goal.position);
          
            dir.copy( a ).sub( b ).normalize();
            const dis = a.distanceTo( b ) - coronaSafetyDistance;
            goal.position.addScaledVector( dir, dis );
            goal.position.lerp(temp, 0.02);
            temp.setFromMatrixPosition(follow.matrixWorld);
            
            camera.lookAt( car.position );
        
            for ( let i = 0; i < diamonds.children.length; i ++ ) {
                diamonds.children[i].rotation.x = diamonds.children[i].rotation.x + 0.01;
                diamonds.children[i].rotation.y = diamonds.children[i].rotation.y + 0.01; 
            }
            
            
            controls.update()
        
            this.renderer.render( this.scene, camera );
        }
        
        tick()
        
        


    }


    componentWillUnmount() {
        console.log('dispose renderer!')
        this.renderer.dispose()
        
        this.scene.traverse(object => {
            if (!object.isMesh) return
            
            console.log('dispose geometry!')
            object.geometry.dispose()
        
            if (object.material.isMaterial) {
                cleanMaterial(object.material)
            } else {
                // an array of materials
                for (const material of object.material) cleanMaterial(material)
            }
        })
        
        function cleanMaterial(material) {
            console.log('dispose material!')
            material.dispose()
        
            // dispose textures
            for (const key of Object.keys(material)) {
                const value = material[key]
                if (value && typeof value === 'object' && 'minFilter' in value) {
                    console.log('dispose texture!')
                    value.dispose()
                }
            }
        }
        
    }

    render() {
      return (
          <div className="flex justify-center items-center bg-slate-700">
              <div ref={ref => (this.mount = ref)}  id="three" className=" ring ring-width-3 hover:ring-blue-500"/>
          </div>
        
      )
    }
  }


export default Car;
