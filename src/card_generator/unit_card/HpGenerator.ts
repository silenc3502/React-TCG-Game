import * as THREE from 'three';
import {Mesh, Scene, Vector3} from "three";
import {useYourHpVertexStore} from "./state/hpStore";

export default class HpGenerator {
    private scene: THREE.Scene;
    private cardList: THREE.Mesh[];
    private cardPosition: Vector3

    constructor(scene: Scene, cardList: Mesh[], cardPosition: Vector3) {
        this.scene = scene;
        this.cardList = cardList;
        this.cardPosition = cardPosition
    }

    public async generateHp(texturePath: string): Promise<THREE.Mesh | null> {
        const texture = await this.loadTexture(texturePath);
        if (!texture) return null;

        const hpMesh = this.createHpMesh(texture);
        if (!hpMesh) return null;

        this.scene.add(hpMesh);
        // this.cardList.push(weaponMesh);

        return hpMesh;
    }

    private async loadTexture(texturePath: string): Promise<THREE.Texture | null> {
        return new Promise((resolve) => {
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(texturePath, (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace
                resolve(texture);
            });
        });
    }

    private createHpMesh(texture: THREE.Texture): THREE.Mesh {
        // 무기 메시 생성 및 설정
        const hpSize = 34;
        const hpGeometry = new THREE.PlaneGeometry(hpSize, hpSize * 1.6545);
        const hpMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
        const hpMesh = new THREE.Mesh(hpGeometry, hpMaterial);

        // 무기 메시의 위치 설정
        hpMesh.position.set(this.cardPosition.x - 54, this.cardPosition.y - 72, this.cardPosition.z);
        const newVertex = { x: hpMesh.position.x, y: hpMesh.position.y };
        useYourHpVertexStore.getState().setVertex(newVertex)

        // 무기 메시의 회전 설정
        hpMesh.rotation.set(0, 0, 0); // 원하는 회전 각도로 설정

        return hpMesh;
    }
}
