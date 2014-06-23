#!/bin/sh

git submodule update

. ./build.env

echo "###############################";
echo "START Build";

${JAVA_CMD} -jar ${CLOSURE_STYLESHEETS} \
  --output-file compiled/clt.css \
  --output-renaming-map js/templates/CssMaping.js \
  --output-renaming-map-format CLOSURE_COMPILED \
  --rename CLOSURE \
  ./gss/clt.gss 

${JAVA_CMD} -jar ${SOY_COMPILER} \
  --shouldGenerateJsdoc \
  --shouldProvideRequireSoyNamespaces  \
  --cssHandlingScheme GOOG  \
  --outputPathFormat js/templates/{INPUT_FILE_NAME_NO_EXT}.js \
  soy/CLTTemplates.soy

${PYTHON_CMD} ${CLOCURE_BUILDER} \
  --compiler_flags="js/templates/CssMaping.js" \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  --compiler_flags="--define='goog.DEBUG=false'" \
  --compiler_flags="--define=\"goog.userAgent.ASSUME_MOBILE_WEBKIT=true\"" \
  --compiler_flags="--output_wrapper=(function() {%output%})();" \
  --compiler_flags="--warning_level=VERBOSE" \
  --compiler_jar=${CLOSURE_COMPILER} \
  --namespace="CLT.Base" \
  --output_file=./compiled/clt.js \
  --output_mode=compiled \
  --root=js/ \
  --root=closure-library \
  --root=closure-builder

echo "FIX Build";
echo "###############################";


