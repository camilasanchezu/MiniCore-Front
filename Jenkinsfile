pipeline {
    agent any

    tools {
        nodejs 'NodeJS 16'  // Configura NodeJS en Jenkins con este nombre
    }

    environment {
        APP_ENV = 'development'
        DEPLOY_PATH = 'C:\\deploy\\miApp'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Clonando el repositorio...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo '🧱 Instalando dependencias...'
                bat 'npm ci || npm install'
            }
        }

        stage('Unit Tests') {
            steps {
                echo '🧪 Ejecutando pruebas unitarias con Jest...'
                bat 'npx jest --ci'
                junit 'TestResult/jest-junit.xml'
            }
        }

        stage('Code Quality - ESLint') {
            steps {
                echo '🔍 Analizando código con ESLint...'
                bat 'npx eslint services --ext .js -f checkstyle -o TestResult\\eslint-report.xml'
                recordIssues tools: [checkStyle(pattern: 'TestResult/eslint-report.xml')]
            }
        }


        stage('Deploy') {
            steps {
                echo '🚀 Desplegando aplicación (simulado)...'
                bat "if not exist ${DEPLOY_PATH} mkdir ${DEPLOY_PATH}"
                bat "xcopy /E /I /Y . ${DEPLOY_PATH}"
            }
        }
    }

    post {
        always {
            echo '🧹 Limpieza final: siempre se ejecuta.'
            archiveArtifacts artifacts: 'TestResult/**', allowEmptyArchive: true
            mail from: 'csanchez.lospinos@gmail.com',
                 to: 'mateo.rosero@udla.edu.ec',
                 subject: 'MiniCore-Front Pipeline finalizado',
                 body: """Hola,

El pipeline MiniCore-Front ha finalizado con estado: ${currentBuild.currentResult}.
Revisa Jenkins para más detalles.

Saludos."""
        }

        success {
            echo '✅ Pipeline completado correctamente.'
        }

        failure {
            echo '❌ El pipeline falló.'
        }
    }
}
