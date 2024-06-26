import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import AudioPlayer from "../audio_player/AudioPlayer";
import { useNavigate } from 'react-router-dom';

import entranceBattleFieldButton from '../assets/eddi_tcg_game/images/main_lobby/entrance_battle_field_button.png';
import myCardButton from '../assets/eddi_tcg_game/images/main_lobby/myCardButton.png';
import shopButton from '../assets/eddi_tcg_game/images/main_lobby/shopButton.png';
import {Button, Grid} from "@mui/material";

const RotatingBox: React.FC = () => {
    const boxRef = React.useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.01;
            boxRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={boxRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};

const MyScene: React.FC = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingBox />
            <OrbitControls />
        </Canvas>
    );
};

const EddiTcgCardShop: React.FC = () => {
    const cardShopAudioUrl = "/assets/eddi_tcg_game/music/card_shop/card-shop-menu.mp3";
    const navigate = useNavigate();

    const raceImages = [
        { src: '/assets/eddi_tcg_game/images/card_shop/all_button.png', route: '/eddi-tcg-game-battle-field' },
        { src: '/assets/eddi_tcg_game/images/card_shop/select_undead.png', route: '/eddi-tcg-game-my-card' },
        { src: '/assets/eddi_tcg_game/images/card_shop/select_trent.png', route: '/eddi-tcg-game-card-shop' },
        { src: '/assets/eddi_tcg_game/images/card_shop/select_human.png', route: '/eddi-tcg-game-card-shop' },
    ];

    const handleMyCardButtonClick = () => {
        navigate("/eddi-tcg-my-card");
    };

    const handleMainLobbyButtonClick = () => {
        navigate("/eddi-tcg-main-lobby");
    };

    return (
        <div>
            <div style={{paddingTop: '64px'}}></div>
            <div style={{
                width: '100vw',
                height: '100%',
                position: 'fixed',
                top: 32,
                left: 0,
                zIndex: -1,
                backgroundImage: `url(/assets/eddi_tcg_game/images/card_shop/shop_background.png)`,
                backgroundSize: '100vw calc(100vh - 64px)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', // Center the background image
            }}>
                <AudioPlayer url={cardShopAudioUrl}/>
                <MyScene/>
            </div>
            <div style={{position: 'absolute', top: 'calc(64px + 3%)', left: -10, width: '100%', height: '70%'}}>
                <Button
                    onClick={() => handleMainLobbyButtonClick()}
                    style={{width: '10%', height: '10%', borderRadius: 0}}>
                    {/*<img src={raceImages[0].src} alt={`image-0`} style={{width: '100%', height: '100%'}}/>*/}
                </Button>
            </div>
            <div style={{position: 'absolute', top: 'calc(64px + 11%)', left: -10, width: '100%', height: '70%'}}>
                <Button
                    onClick={() => handleMyCardButtonClick()}
                    style={{width: '10%', height: '10%', borderRadius: 0}}>
                    {/*<img src={raceImages[0].src} alt={`image-0`} style={{width: '100%', height: '100%'}}/>*/}
                </Button>
            </div>
            <div style={{position: 'absolute', top: 'calc(64px + 34%)', left: '7.8%', width: '84.4%', height: 'calc(-64px + 64%)'}}>
                <Button
                    onClick={() => handleMainLobbyButtonClick()}
                    style={{width: '19.8%', height: '52%', borderRadius: 0}}>
                    <img src={raceImages[0].src} alt={`image-0`} style={{width: '100%', height: '100%'}}/>
                </Button>
            </div>
        </div>
    );
};

const calculateTopPosition = (index: number, images: { heightPercentage: number }[]) => {
    let totalPercentage = 0;
    for (let i = 0; i < index; i++) {
        totalPercentage += images[i].heightPercentage;
    }
    return totalPercentage * 100;
};

export default EddiTcgCardShop;