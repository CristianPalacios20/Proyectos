import { LineChart, Line, XAxis, LabelList, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

type MetricasProps = {
  metricas: {
    TP: number;
    PA: number;
    PI: number;
    PMV_positivo: number;
    PMV_negativo: number;
  };
};

export default function GraficoProductos({ metricas }: MetricasProps) {
  const datos = [
    { nombre: "TP", valor: metricas.TP },
    { nombre: "PA", valor: metricas.PA },
    { nombre: "PI", valor: metricas.PI },
    { nombre: "PMV+", valor: metricas.PMV_positivo },
    { nombre: "PMV-", valor: metricas.PMV_negativo },
  ];
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nombre" />
        <YAxis />
        <Tooltip/>
        <Line dataKey="valor" fill="orange" stroke="BLUE" />
        <LabelList dataKey="valor" position="top" style={{ fill: "blue", fontSize: "14px", fontWeight: "bold" }} />
      </ LineChart>
    </ResponsiveContainer>
  );
}
