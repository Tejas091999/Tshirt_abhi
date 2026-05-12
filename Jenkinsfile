pipeline{
    agent any
    stages{
        stage('Fetch'){
            steps{
               git branch : 'main',
               url : 'https://github.com/Tejas091999/Tshirt_abhi.git' 
            }
        }

        stage('Build'){
            steps{
                echo 'Building Website...'
            }
        }

        stage('Deploy'){
            steps{
                echo "Deploying to docker"
            }
        }
    }
}