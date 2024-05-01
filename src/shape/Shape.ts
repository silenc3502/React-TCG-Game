import * as THREE from "three";

export interface Shape {
    vertices: [number, number][];
    initial_vertices: [number, number][] | null;
    initial_center: [number, number] | null;
    width_ratio: number;
    height_ratio: number;
    global_translation: [number, number];
    local_translation: [number, number];
    translation: [number, number];
    attached_shapes: any[];

    setWidthRatio(width_ratio: number): void;
    setHeightRatio(height_ratio: number): void;
    setInitialVertices(vertices: [number, number][]): void;
    getInitialVertices(): [number, number][] | null;
    setInitialCenter(vertices: [number, number][]): void;
    getInitialCenter(): [number, number] | null;
    setAttachedShapes(shape: any): void;
    getAttachedShapes(): any[];
    setDetachedShape(shape: any): void;
    localTranslate(local_translate: [number, number]): void;
    globalTranslate(global_translate: [number, number]): void;
    setAlpha(new_alpha: number): void;
    updateVertices(new_vertices: [number, number][]): void;
    updateCenter(new_center: [number, number]): void;
    getVertices(): [number, number][];
    getLocalTranslation(): [number, number];
    draw(scene: THREE.Scene): void;
}
