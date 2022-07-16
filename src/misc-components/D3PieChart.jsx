/* import * as d3 from "d3";
import { useEffect } from 'react';

const D3PieChart = (props) => {
    const data = [
        { value: 1.8 },
        { value: 98.2 },

    ];
    const { outerRadius, innerRadius } = props;

    const margin = { top: 100, right: 50, bottom: 50, left: 50 };

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    const colorScale = d3
        .scaleSequential()
        .interpolator(d3.interpolateCool)
        .domain([0, data.length]);

    useEffect(() => {
        drawChart();
    }, [data]);

    const drawChart = () => {
        d3.select('#pie-container')
            .select('svg')
            .remove();

        const svg = d3
            .select('#pie-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.value);

        const arc = svg
            .selectAll()
            .data(pieGenerator(data))
            .enter();

        arc
            .append('path')
            .attr('d', arcGenerator)
            .style('fill', (_, i) => colorScale(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', 0);
    }

    return <div id="pie-container" />;
}
export default D3PieChart;
 */
