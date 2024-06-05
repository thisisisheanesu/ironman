// "Iron Man helmet" (https://skfb.ly/oQMRq) by Bence04 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Ironman(props: any) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF('/models/IronMan.glb') as any;
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.cos(t / 2) / 20 + 0.25, 0.1)
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[0, Math.PI, -0.2]} position={[0, 1, 0]}>
                <mesh
                    geometry={nodes.Cylinder.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.Plane.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    geometry={nodes.Plane_1.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    geometry={nodes.Plane_2.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    geometry={nodes.Scene.geometry}
                    material={materials['Material.002']}
                />
            </group>
        </group>
    );
}