// import { Rectangle } from './opengl_shape/rectangle';

import {Rectangle} from "../../shape/Rectangle";

export class PickableRectangle extends Rectangle {
    // private attached_shapes: any[] = [];
    //
    // constructor(color: any, vertices: [number, number][], global_translation: [number, number] = [0, 0], local_translation: [number, number] = [0, 0]) {
    //     super(color, vertices, global_translation, local_translation);
    // }
    //
    // public isPointInside(point: [number, number]): boolean {
    //     let [x, y] = point;
    //     y *= -1;
    //
    //     const translated_vertices: [number, number][] = this.vertices.map(([x, y]) => [
    //         x * this.width_ratio + this.global_translation[0] + this.local_translation[0] * this.width_ratio,
    //         y * this.height_ratio + this.global_translation[1] + this.local_translation[1] * this.height_ratio
    //     ]);
    //
    //     if (!(translated_vertices[0][0] <= x && x <= translated_vertices[2][0] &&
    //         translated_vertices[0][1] <= y && y <= translated_vertices[2][1])) {
    //         return false;
    //     }
    //
    //     return true;
    // }
}
