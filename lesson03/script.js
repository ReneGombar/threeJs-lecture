//!Scene
const scene = new THREE.Scene()

//add simple cube mesh
const geometry = new THREE.BoxGeometry(1,1,1)

//add red material 
const material = new THREE.MeshBasicMaterial({color:'red'})
const mat2 = new THREE.MeshBasicMaterial({color:'blue'})

// create object by combining mesh with material
const mesh = new THREE.Mesh(geometry,material)

//add the new object to the scene
scene.add(mesh)

//!Camera
//setup fov, aspect-ratio (width/height)
const fov = 75

// aspect ratio is width/height
const sizes = {
    width : 800,
    height : 600
}

//create camera object
const camera = new THREE.PerspectiveCamera(50,sizes.width/sizes.height)
// move camera away from center of the scene
camera.position.z = 3
camera.position.y = 1
camera.rotation.x = -0.3
//add camera to scene
scene.add(camera)

//!Renderer
// get canvas element from html file with classname
const canvas = document.querySelector(".webgl")

// create renderer which will render in canvas element
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//resize the renderer, this will resize the canvas too
renderer.setSize(sizes.width,sizes.height)

//Finally render the scene and camera
renderer.render(scene,camera)