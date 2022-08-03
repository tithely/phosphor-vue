module.exports = {
    presets: [
        [`@babel/preset-env`, { targets: `> 0.5%, last 2 major versions, Firefox ESR, not dead, iOS 13, Safari 13` }],
        `@babel/preset-typescript`
    ]
}
