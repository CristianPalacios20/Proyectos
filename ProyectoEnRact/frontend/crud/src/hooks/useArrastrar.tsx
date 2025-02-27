import { useState } from 'react'

export default function useArrastrar(posicionInicial = { x: 100, y: 100}) {
    const [posicion, setPosicion] = useState(posicionInicial);
    const [arrastrando, setArrastrando] = useState(false);
    const [offset, setOffset] = useState<{ x : number, y : number }>({ x: 0, y: 0 });

    const iniciarArrastre = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setArrastrando(true);
        setOffset({
            x: e.clientX - posicion.x,
            y: e.clientY - posicion.y
        });
    }

    const moverVentana = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(!arrastrando) return;
        setPosicion({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y
        });
    }

    const detenerArrastre = () => {
        setArrastrando(false);
    }

  return { posicion, iniciarArrastre, detenerArrastre,  moverVentana };
}
