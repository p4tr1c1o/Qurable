# Challenge Quora

## Tabla de contenidos

- [Tecnologias](#tecnologias)
- [Features](#features)
- [Como se corre](#como-se-corre)
- [Como se despliega](#como-se-despliega)

## Tecnologias

Este proyecto fue creado usando [Vite](https://vitejs.dev/)
UI desarrollada con [MaterialUI](https://mui.com/material-ui/)
Gestion de formularios con [Formik](https://formik.org/)
Testing con [Vitest](https://vitest.dev/)
Automatizaciones con [Husky](https://typicode.github.io/husky/)
CI/CD con [Github Actions](https://github.com/p4tr1c1o/Qurable/actions)

## Features
  
  * Manejo de tipos con Typescript
  * Linting y formateo de codigo automatico antes de cada coommit

## Como se corre

Primero instalar todas las dependencias con:

	yarn install

Creamos el archivo .env.local con los valores enviados en el correo

Luego levantar el entorno de desarrollo con:

	yarn run dev

Se puede ejecutar los tests de cada ejercicio con:

	yarn run test

## Como se despliega

### Despliegue automatico

Este proyecto se encuentra integrado con Firebase a traves de [Github Actions](https://github.com/p4tr1c1o/Qurable/actions), por lo cual luego de cada push se ejecuta un Action de build y despliegue al hosting.

### Despliegue manual

Se puede ejecutar este proceso manualmente

Transpilando el codigo con:

	yarn run build 

Iniciando sesion en Firebase con:

	firebase login

Luego desplegando el codigo con:

	firebase deploy
