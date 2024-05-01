// import { PickableRectangle } from './PickableRectangle';
// import { RectangleImage } from './RectangleImage';
// import { PreDrawedImage } from './PreDrawedImage';
// import { CardInfoFromCsvRepositoryImpl } from './CardInfoFromCsvRepositoryImpl';

// import { CardControllerImpl } from './CardControllerImpl';
import {CardElementKinds} from "../../common/CardElementKinds";

export class PickableCard { }
//     private static __pre_drawed_image_instance = PreDrawedImage.getInstance();
//     private tool_card: any;
//     private pickable_card_base: PickableRectangle | null = null;
//     private local_translation: [number, number];
//     private scale: number;
//     private card_number: number | null = null;
//     private initial_vertices: [number, number][] | null = null;
//     private index: number = 0;
//     private card_info = CardInfoFromCsvRepositoryImpl.getInstance();
//     private card_controller = CardControllerImpl.getInstance();
//
//     constructor(local_translation: [number, number] = [0, 0], scale: number = 1) {
//         this.local_translation = local_translation;
//         this.scale = scale;
//     }
//
//     public getCardNumber(): number | null {
//         return this.card_number;
//     }
//
//     public setCardNumber(card_number: number): void {
//         this.card_number = card_number;
//     }
//
//     public getIndex(): number {
//         return this.index;
//     }
//
//     public setIndex(index: number): void {
//         this.index = index;
//     }
//
//     public changeLocalTranslation(_translation: [number, number]): void {
//         this.local_translation = _translation;
//     }
//
//     public getPickableCardBase(): PickableRectangle | null {
//         return this.pickable_card_base;
//     }
//
//     public getToolCard(): any {
//         return this.tool_card;
//     }
//
//     public createCardBasePickableRectangle(color: [number, number, number, number], vertices: [number, number][], local_translation: [number, number]): PickableRectangle {
//         const pickable_card_base = new PickableRectangle(color, local_translation, vertices);
//
//         pickable_card_base.setInitialVertices(vertices);
//         return pickable_card_base;
//     }
//
//     public createCardFrame(image_data: string, vertices: [number, number][], local_translation: [number, number]): RectangleImage {
//         const card_frame = new RectangleImage(image_data, local_translation, vertices);
//
//         card_frame.setCardElementKinds(CardElementKinds.FRAME);
//         card_frame.setInitialVertices(vertices);
//         return card_frame;
//     }
//
//     public initCard(card_number: number): void {
//         this.setCardNumber(card_number);
//         const rectangle_height = 170;
//         const rectangle_width = 105;
//
//         const basic_pickable_card_base_vertices: [number, number][] = [
//             [0, 0],
//             [105, 0],
//             [105, 170],
//             [0, 170]
//         ];
//
//         this.pickable_card_base = this.createCardBasePickableRectangle(
//             [0.0, 0.78, 0.34, 1.0],
//             this.local_translation,
//             basic_pickable_card_base_vertices
//         );
//
//         const cardFrameImageData = PickableCard.__pre_drawed_image_instance.getPreDrawBattleFieldCardFrameForCardNumber(card_number);
//         if (cardFrameImageData) {
//             this.pickable_card_base.setAttachedShapes(
//                 this.createCardFrame(
//                     cardFrameImageData,
//                     this.local_translation,
//                     basic_pickable_card_base_vertices
//                 )
//             );
//         }
//
//         const cardControllerShapes = this.card_controller.getCardTypeTable(this.card_info.getCardTypeForCardNumber(card_number));
//         const card_shapes = cardControllerShapes(this.local_translation, card_number, rectangle_height, rectangle_width);
//         for (const shape of card_shapes) {
//             if (this.pickable_card_base) {
//                 this.pickable_card_base.setAttachedShapes(shape);
//             }
//         }
//     }
// }
