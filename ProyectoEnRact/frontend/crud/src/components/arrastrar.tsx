interface ArrastrarProps {
    iniciarArrastre: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    moverVentana: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    detenerArrastre: () => void;
  }

export default function Arrastrar({ iniciarArrastre, moverVentana, detenerArrastre } : ArrastrarProps) {
  return (
    <div
        className="barra-arrastre"
        onMouseDown={iniciarArrastre}
        onMouseMove={moverVentana}
        onMouseUp={detenerArrastre}
    >
        Arrastrar Ventana
    </div>
  )
}
