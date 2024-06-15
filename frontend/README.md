# For start locally

Method-1 For Docker user:

```bash
docker build -t frontDev .
docker run -d -p 8080:8080 --name PaymentFront frontDev
```
Method-2 For Normal:

```bash
npm install
npm run dev
```
