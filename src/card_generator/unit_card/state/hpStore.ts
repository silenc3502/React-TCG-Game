import create from 'zustand';

export interface Vertex {
    x: number;
    y: number;
}

// 사각형을 표현하는 상태와 함수를 정의하는 인터페이스
interface StoreState {
    vertex: Vertex;
    setVertex: (vertex: Vertex) => void; // 정점을 업데이트하는 함수
}

export const useYourHpVertexStore = create<StoreState>((set) => ({
    vertex: { x: 0, y: 0 },
    setVertex: (vertex) => set({ vertex }),
}));