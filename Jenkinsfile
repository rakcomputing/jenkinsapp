pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PATH = "/usr/bin:/usr/local/bin:$PATH"  // include node/npm location
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rakcomputing/jenkinsapp.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'which node'
                sh 'which npm'
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start (Optional)') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run start & sleep 5'
            }
        }
    }

    post {
        success {
            echo '✅ Build & Next.js compilation complete!'
        }
        failure {
            echo '❌ Build failed. Check errors above.'
        }
    }
}
