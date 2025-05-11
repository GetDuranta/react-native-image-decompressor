import type { HybridObject } from 'react-native-nitro-modules';

export interface ImageInfo {
  width: number;
  height: number;
  rgba: ArrayBuffer;
}

export interface DelayedImage extends HybridObject<{ ios: 'c++'; android: 'c++' }> {
  getRgba(): ArrayBuffer;
  inflight(): boolean;
  success(): boolean;
}

export interface ImageDecompressor
  extends HybridObject<{ ios: 'c++'; android: 'c++' }> {
  // Decompress the image
  decompressImage(compressed: ArrayBuffer): ImageInfo;

  // Decompress the image in the background
  decompressImageInBackground(
    compressed: ArrayBuffer,
    expectedWidth: number,
    expectedHeight: number): DelayedImage;

  waitForPendingDecompressors() : boolean;
}
