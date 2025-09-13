import screenshot, { type Display } from "screenshot-desktop"

export async function takeScreenshot(): Promise<Buffer> {
    return await screenshot.listDisplays()
        .then((displays: Display[]) => screenshot({
            // @ts-expect-error We donn't know what display you want to check.
            format: 'png', screen: displays[1].id
        }));
}
