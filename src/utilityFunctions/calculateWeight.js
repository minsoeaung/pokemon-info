export default function calculateWeight(weight) {
    return (Math.round((weight * 0.2205) * 10) / 10).toFixed(1);
}