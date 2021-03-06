//import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;
var targetEl;

const CWIDTH = 600;
const CHEIGHT = 400;

function renderCanvas() {
    const THREE = window.THREE;

    camera = new THREE.PerspectiveCamera( 70, CWIDTH / CHEIGHT, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( CWIDTH, CHEIGHT );

    targetEl.appendChild( renderer.domElement );

    return renderer.domElement;
}

function animate() {
    requestAnimationFrame( animate );


    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );
}

function HelloCube(targetId) {
  targetEl = document.getElementById(targetId);
  if (targetEl) {
    renderCanvas();
    animate();
  }
}

window.HelloCube = HelloCube;
