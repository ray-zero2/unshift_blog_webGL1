attribute vec3 position;
attribute vec3 faceNormal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

varying vec3 vPosition;
varying float vNoise;
varying float vNow;

const float duration = 2.0;
const float delayAll = 1.0;

#pragma glslify: ease = require(glsl-easings/exponential-out)
#pragma glslify: calcTranslateMat4 = require(glsl-matrix/calcTranslateMat4);
#pragma glslify: calcRotateMat4 = require(glsl-matrix/calcRotateMat4);
#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)

void main() {
  float t = time * 1.0;
  mat4 translateMat = calcTranslateMat4(vec3(faceNormal) * 40.0 * (sin(t) + 2.0));
  mat4 rotateMat = calcRotateMat4(vec3(0.0, radians((1.0 - t) * 40.0), 0.0));
  float noise = smoothstep(-0.4, 0.4,
    cnoise3(vec3(position.x * 0.035 - t, position.y * 0.035 - time, position.z * 0.035 + t))
  ) * 2.0 - 1.0;
  vec4 updatePosition = rotateMat * translateMat * vec4(position, 1.0);
  vPosition = updatePosition.xyz;
  vNoise = noise;
  vNow = t;
  gl_Position = projectionMatrix * modelViewMatrix * updatePosition;
}
