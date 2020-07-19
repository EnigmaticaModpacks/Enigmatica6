//priority: 1000

function material(n, c, i, b) {
    return { name: n, color: c, itemParts: i, blockParts: b };
}

function blockWithProperties(n, m, h, hl, ha, r) {
    return { name: n, material: m, harvestTool: h, harvestLevel: hl, hardness: ha, resistance: r };
}
