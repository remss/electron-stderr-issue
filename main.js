async function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

async function demo() {
    process.stderr.write('message from process.stderr.write\n')
    await sleep(500)
    process.stdout.write('message from process.stdout.write\n')
    await sleep(500)
    console.error('message from console.error')
    process.exit(0)
}

demo()