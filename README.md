# Challenge Quora por Patricio Dibernardi

## Tabla de contenidos

- [Tecnologias](#tecnologias)
- [Features](#features)
- [Como se corre](#como-se-corre)
- [Como se despliega](#como-se-despliega)

## Tecnologias

Este proyecto fue creado usando [Vite](https://vitejs.dev/)
* por me ofrece la mejor experiencia de desarrollo ademas de contar con muchisimas optimizaciones de compilacion

UI desarrollada con [MaterialUI](https://mui.com/material-ui/)
* en este caso elijo basarme en una libreria muy conocida para agilizar los tiempos de desarrollo y entrega

Gestion de formularios con [Formik](https://formik.org/)
* esta libreria me permite gestionar formularios de manera eficiente y sistematica con soporte para escenarios compejos

Testing con [Vitest](https://vitest.dev/)
* Vitest esta integrado a nuestro tooling set y nos da soporte para nuestro suite de tests

Automatizaciones con [Husky](https://typicode.github.io/husky/)
* me permite automatizar pruebas y linting, agilizando el ciclo de desarrollo

CI/CD con [Github Actions](https://github.com/p4tr1c1o/Qurable/actions)
* elijo esta plataforma para realizar CI/CD ya que cuenta con todas las herramientas necesarias para compilar e integrarse con Firebase

Hostig con [Firebase](https://console.firebase.google.com/)
* este wrapper de servicios de Google lo elijo por que nuclea todos los servicios que necesito de una manera simple y muy bien documentada. 

## Features
  
  * Manejo de tipos con Typescript
  * Linting y formateo de codigo automatico antes de cada commit

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
