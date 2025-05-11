import { NitroModules } from 'react-native-nitro-modules';
import type { DelayedImage, ImageDecompressor, ImageInfo } from './ImageDecompressor.nitro';

const ImageDecompressorHybridObject =
  NitroModules.createHybridObject<ImageDecompressor>('ImageDecompressor');

export function decompressImage(compressed: ArrayBuffer): ImageInfo {
  return ImageDecompressorHybridObject.decompressImage(compressed);
}

export function decompressImageInBackground(compressed: ArrayBuffer,
                                            expectedWidth: number,
                                            expectedHeight: number): DelayedImage {
  return ImageDecompressorHybridObject.decompressImageInBackground(
    compressed,
    expectedWidth,
    expectedHeight);
}

export function waitForPendingDecompressors(): boolean {
  return ImageDecompressorHybridObject.waitForPendingDecompressors();
}
