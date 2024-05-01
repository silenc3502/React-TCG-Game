import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Rectangle } from '../Rectangle';

function ThreeRectangleTest() {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return; // null 체크

        // Three.js scene 생성
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        // Rectangle 생성
        const rectVertices: [number, number][] = [
            [-50, -50],
            [50, -50],
            [50, 50],
            [-50, 50]
        ];

        const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const rectangle = new Rectangle([1, 0, 0, 1], rectVertices, material); // 빨간색 사각형 생성
        scene.add(rectangle);

        // 카메라 위치 설정
        camera.position.z = 100;

        // 렌더링 함수 정의
        const animate = function () {
            requestAnimationFrame(animate);

            // 사각형 회전
            rectangle.rotation.x += 0.01;
            rectangle.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        // 렌더링 시작
        animate();

        // 컴포넌트가 unmount 될 때 렌더러 제거
        return () => {
            renderer.domElement.remove();
        };
    }, []);

    return <div ref={canvasRef} />;
}

export default ThreeRectangleTest;
