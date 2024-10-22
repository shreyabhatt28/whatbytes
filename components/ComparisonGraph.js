import * as d3 from 'd3';
import { useRef, useEffect } from "react";

const ComparisonGraph = ({ details }) => {
    const svgRef = useRef(null);
    const data = [
        {
            x: details.percentile,
            y: 6
        },
        {
            x: 82,
            y: 2
        },
        {
            x: 90,
            y: 4
        },
        {
            x: 67,
            y: 7
        }
    ];

    

    useEffect(() => {

    const margin = { left: 30, right: 20, top: 40, bottom: 30 };
    const totalWidth = svgRef.current.getBoundingClientRect().width;
    const totalHeight = 500;
    const width = totalWidth - margin.left - margin.right;
    const height = totalHeight - margin.top - margin.bottom;

        d3.select(svgRef.current).select("svg").remove();

        
        const svg = d3.select(svgRef.current)
            .append("svg")
            .attr("width", totalWidth)
            .attr("height", totalHeight)
            .style("background-color", "whitesmoke")
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        
        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([height, 0]);

        
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        
        svg.append("g")
            .call(d3.axisLeft(yScale));

        
        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveMonotoneX);

        
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line);

        return () => {
            d3.select(svgRef.current).select("svg").remove();
        };
    }, [details]);

    return (
        <div ref={svgRef} className="bg-amber-200 w-full h-[500px]"></div>
    );
};

export default ComparisonGraph;
