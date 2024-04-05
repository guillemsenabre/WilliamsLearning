'use client';

import { useState, useEffect, createRef, useRef, memo } from 'react';
import * as d3 from 'd3';

import styles from "@/styles/page.module.css";

import ChartData from "@/chartData.json";

interface NodeData {
  name: string;
  children?: NodeData[];
}

interface ChartProps {}

const Chart: React.FC<ChartProps> = () => {

  const chartData:NodeData = ChartData;
  const chartRef = useRef<HTMLDivElement | null>(null);

  console.log(chartData);

  // SVG creation with D3 library
  const renderChart = (data: NodeData) => {
    // Simplified D3 code for 3 nodes
    const width = 400;
    const height = width;
    const cx = width * 0.5;
    const cy = height * 0.5;
    const radius = Math.min(width, height) / 2 - 30;

    const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-cx, -cy, width, height])
      .attr("style", "font: 10px sans-serif;");

    const tree = d3.tree<NodeData>().size([2 * Math.PI, radius]);
    const root = tree(d3.hierarchy(data));

    // Create a group element within the SVG
    const g = svg.append("g");

    g.selectAll("circle")
      .data(root.descendants())
      .enter()
      .append("circle")
      .attr("transform", (d) => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
      .attr("fill", "#ccc")
      .attr("r", 8);

    g.selectAll("text")
      .data(root.descendants())
      .enter()
      .append("text")
      .attr("transform", (d) => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
      .attr("dy", "0.31em")
      .attr("text-anchor", "middle")
      .attr("fill", "#000")
      .text((d) => d.data.name);

    d3.select(chartRef.current).append(() => svg.node());
  };


  return (
    <div ref={chartRef} className={styles.svgChart}>
      <>{renderChart(chartData)}</>
    </div>
  );
};

export default Chart;