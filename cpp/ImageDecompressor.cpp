#include "ImageDecompressor.hpp"

using namespace margelo::nitro::imagedecompressor;

// Limit images to 2048x2048
#define STBI_MAX_DIMENSIONS 2048

#define STBI_ONLY_JPEG
#define STBI_ONLY_PNG
#define STBI_NO_STDIO

#define STBI_FAILURE_USERMSG
#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"

#define NUM_RGBA_CHANNELS 4

ImageInfo ImageDecompressor::decompressImage(const std::shared_ptr<ArrayBuffer>& compressed) {
  int width, height, channels;
  stbi_uc *rgba = stbi_load_from_memory(compressed->data(),
    compressed->size(), &width, &height, &channels, NUM_RGBA_CHANNELS);
  if (!rgba) {
    // The failure reason is stored in a thread local variable, so it's thread safe.
    throw std::runtime_error("Failed to decompress image: " + std::string(stbi_failure_reason()));
  }

  ImageInfo imageInfo;
  imageInfo.width = width;
  imageInfo.height = height;
  imageInfo.rgba = ArrayBuffer::wrap(rgba, width*height*NUM_RGBA_CHANNELS, [=]() {free(rgba);});

  return imageInfo;
}
