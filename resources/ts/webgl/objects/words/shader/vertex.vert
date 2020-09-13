uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;
uniform float time;
uniform vec3 cameraPosition;
uniform float numChars;

attribute vec3 position;
attribute vec3 randomValues;
attribute vec2 uv;
attribute float charIndex;

varying vec4 vColor;
varying vec2 vUv;

const float PI = 3.1415926535897932384626433832795;

const float radius = 60.0;

vec3 rotateVec3(vec3 p, float angle, vec3 axis){
  vec3 a = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float r = 1.0 - c;
  mat3 m = mat3(
    a.x * a.x * r + c,
    a.y * a.x * r + a.z * s,
    a.z * a.x * r - a.y * s,
    a.x * a.y * r - a.z * s,
    a.y * a.y * r + c,
    a.z * a.y * r + a.x * s,
    a.x * a.z * r + a.y * s,
    a.y * a.z * r - a.x * s,
    a.z * a.z * r + c
  );
  return m * p;
}

void main() {
  vec3 pos = position;
  float theta = PI * 2.0 / numChars * charIndex;
  pos.z += radius;
  pos = rotateVec3(pos, theta, vec3(0.0, 1.0, 0.0));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vColor = vec4(1.0, 0.0, 0.0, 1.0);
  vUv = uv;
}
