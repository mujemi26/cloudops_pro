#!/bin/bash

# CloudOps Pro Kubernetes Deployment Script

set -e

echo "🚀 Deploying CloudOps Pro to Kubernetes..."

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl is not installed. Please install kubectl first."
    exit 1
fi

# Check if we're connected to a cluster
if ! kubectl cluster-info &> /dev/null; then
    echo "❌ Not connected to a Kubernetes cluster. Please connect to a cluster first."
    exit 1
fi

# Create namespace
echo "📦 Creating namespace..."
kubectl apply -f namespace.yaml

# Apply ConfigMap
echo "⚙️  Applying ConfigMap..."
kubectl apply -f configmap.yaml

# Apply Deployment
echo "🔄 Applying Deployment..."
kubectl apply -f deployment.yaml

# Apply Service
echo "🌐 Applying Service..."
kubectl apply -f service.yaml

# Apply Ingress (optional - comment out if not using ingress)
echo "🚪 Applying Ingress..."
kubectl apply -f ingress.yaml

# Wait for deployment to be ready
echo "⏳ Waiting for deployment to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/cloudops-pro -n cloudops-pro

# Get service info
echo "📊 Deployment Status:"
kubectl get pods -n cloudops-pro
kubectl get services -n cloudops-pro
kubectl get ingress -n cloudops-pro

echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Access your application:"
echo "   - Cluster IP: kubectl port-forward svc/cloudops-pro-service 8080:80 -n cloudops-pro"
echo "   - Ingress: http://cloudops-pro.local (add to /etc/hosts if needed)"
echo ""
echo "📋 Useful commands:"
echo "   - View logs: kubectl logs -f deployment/cloudops-pro -n cloudops-pro"
echo "   - Scale: kubectl scale deployment cloudops-pro --replicas=5 -n cloudops-pro"
echo "   - Delete: kubectl delete -f . -n cloudops-pro" 