# CloudOps Pro - Kubernetes Deployment

This directory contains Kubernetes manifests for deploying the CloudOps Pro application.

## 📁 Files Overview

- `namespace.yaml` - Creates the `cloudops-pro` namespace
- `configmap.yaml` - Environment variables configuration
- `deployment.yaml` - Application deployment with 3 replicas
- `service.yaml` - ClusterIP service for internal communication
- `ingress.yaml` - Ingress for external access
- `deploy.sh` - Automated deployment script

## 🚀 Quick Start

### Prerequisites

1. **Kubernetes Cluster** - Local (minikube, kind) or cloud cluster
2. **kubectl** - Kubernetes command-line tool
3. **Docker Image** - Build and push your image to a registry

### Build and Push Docker Image

```bash
# Build the image
docker build -t cloudops-pro .

# Tag for your registry (replace with your registry)
docker tag cloudops-pro your-registry/cloudops-pro:latest

# Push to registry
docker push your-registry/cloudops-pro:latest
```

### Deploy to Kubernetes

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### Manual Deployment

```bash
# Create namespace
kubectl apply -f namespace.yaml

# Apply ConfigMap
kubectl apply -f configmap.yaml

# Apply Deployment
kubectl apply -f deployment.yaml

# Apply Service
kubectl apply -f service.yaml

# Apply Ingress (optional)
kubectl apply -f ingress.yaml
```

## 🔧 Configuration

### Environment Variables

Edit `configmap.yaml` to modify environment variables:

```yaml
data:
  NODE_ENV: "production"
  PORT: "3000"
  NEXT_PUBLIC_APP_URL: "https://cloudops-pro.local"
```

### Scaling

Scale the deployment:

```bash
# Scale to 5 replicas
kubectl scale deployment cloudops-pro --replicas=5 -n cloudops-pro

# Auto-scaling (if HPA is configured)
kubectl autoscale deployment cloudops-pro --cpu-percent=70 --min=3 --max=10 -n cloudops-pro
```

### Resource Limits

Current resource configuration:
- **Requests**: 128Mi memory, 100m CPU
- **Limits**: 512Mi memory, 500m CPU

Modify in `deployment.yaml`:

```yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "512Mi"
    cpu: "500m"
```

## 🌐 Access Methods

### 1. Port Forward (Development)

```bash
kubectl port-forward svc/cloudops-pro-service 8080:80 -n cloudops-pro
# Access at: http://localhost:8080
```

### 2. Ingress (Production)

Add to `/etc/hosts`:
```
127.0.0.1 cloudops-pro.local
```

Access at: `http://cloudops-pro.local`

### 3. Load Balancer Service

For cloud providers, change service type:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: cloudops-pro-service
spec:
  type: LoadBalancer  # Instead of ClusterIP
  ports:
  - port: 80
    targetPort: 3000
```

## 📊 Monitoring

### Check Deployment Status

```bash
# Pod status
kubectl get pods -n cloudops-pro

# Service status
kubectl get services -n cloudops-pro

# Ingress status
kubectl get ingress -n cloudops-pro
```

### View Logs

```bash
# All pods
kubectl logs -f deployment/cloudops-pro -n cloudops-pro

# Specific pod
kubectl logs -f pod/cloudops-pro-xxxxx -n cloudops-pro
```

### Health Checks

The deployment includes:
- **Liveness Probe**: Checks if container is alive
- **Readiness Probe**: Checks if container is ready to serve traffic

## 🔄 Updates

### Rolling Update

```bash
# Update image
kubectl set image deployment/cloudops-pro cloudops-pro=your-registry/cloudops-pro:v2 -n cloudops-pro

# Check rollout status
kubectl rollout status deployment/cloudops-pro -n cloudops-pro
```

### Rollback

```bash
# Rollback to previous version
kubectl rollout undo deployment/cloudops-pro -n cloudops-pro

# Rollback to specific revision
kubectl rollout undo deployment/cloudops-pro --to-revision=2 -n cloudops-pro
```

## 🗑️ Cleanup

### Delete Everything

```bash
# Delete all resources
kubectl delete -f . -n cloudops-pro

# Or delete namespace (deletes everything in namespace)
kubectl delete namespace cloudops-pro
```

### Delete Individual Resources

```bash
kubectl delete deployment cloudops-pro -n cloudops-pro
kubectl delete service cloudops-pro-service -n cloudops-pro
kubectl delete ingress cloudops-pro-ingress -n cloudops-pro
kubectl delete configmap cloudops-pro-config -n cloudops-pro
```

## 🔒 Security

### Network Policies

Create `network-policy.yaml` for network isolation:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: cloudops-pro-network-policy
  namespace: cloudops-pro
spec:
  podSelector:
    matchLabels:
      app: cloudops-pro
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
    ports:
    - protocol: TCP
      port: 3000
```

### RBAC (if needed)

Create service account and RBAC rules for enhanced security.

## 📈 Scaling Strategies

### Horizontal Pod Autoscaler

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: cloudops-pro-hpa
  namespace: cloudops-pro
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: cloudops-pro
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

## 🐛 Troubleshooting

### Common Issues

1. **Image Pull Errors**
   ```bash
   kubectl describe pod <pod-name> -n cloudops-pro
   ```

2. **Service Not Accessible**
   ```bash
   kubectl get endpoints cloudops-pro-service -n cloudops-pro
   ```

3. **Ingress Not Working**
   ```bash
   kubectl describe ingress cloudops-pro-ingress -n cloudops-pro
   ```

### Debug Commands

```bash
# Describe resources
kubectl describe deployment cloudops-pro -n cloudops-pro
kubectl describe service cloudops-pro-service -n cloudops-pro

# Check events
kubectl get events -n cloudops-pro --sort-by='.lastTimestamp'

# Exec into pod
kubectl exec -it <pod-name> -n cloudops-pro -- /bin/sh
``` 