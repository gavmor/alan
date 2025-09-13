import screenshot from "screenshot-desktop"

export async function takeScreenshot(): Promise<Buffer> {
    return await screenshot()
}
