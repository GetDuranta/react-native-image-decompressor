#include <jni.h>
#include "imagedecompressorOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::imagedecompressor::initialize(vm);
}
