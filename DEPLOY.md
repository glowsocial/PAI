# Deployment Instructions for app.glowsocial.com

## Deploy to Vercel (Recommended)

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import the `glowsocial/PAI` repository
4. Configure the project:
   - Framework: Next.js
   - Root Directory: `.` (leave as is)

### 2. Set Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```bash
# Required - Password hash for accessing patterns
PATTERNS_PASSWORD_HASH=$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi

# Optional - If you have a fabric API server
FABRIC_API_URL=https://your-fabric-api.com
FABRIC_API_KEY=your-api-key
```

To generate a new password hash:
```bash
node -e "console.log(require('bcryptjs').hashSync('your-secure-password', 10))"
```

### 3. Configure Custom Domain

1. Go to Settings → Domains in Vercel
2. Add `app.glowsocial.com`
3. Add the provided DNS records to your domain provider:
   - Type: CNAME
   - Name: app
   - Value: cname.vercel-dns.com

### 4. Deploy

1. Push changes to GitHub
2. Vercel will automatically deploy
3. Access at: https://app.glowsocial.com/patterns

## Alternative: Deploy to Netlify

### 1. Build Command
```bash
npm run build
```

### 2. Publish Directory
```
.next
```

### 3. Environment Variables
Same as Vercel (see above)

## Security Notes

- **Always use HTTPS** in production
- **Change the default password** immediately after deployment
- **Keep PATTERNS_PASSWORD_HASH secret** - never commit it to git
- **Use strong passwords** - minimum 12 characters recommended
- **Consider adding rate limiting** for the login endpoint

## Testing Production Build Locally

```bash
npm run build
npm start
```

Visit http://localhost:3000

## Connecting to Real Fabric API

To connect to a real fabric processing server:

1. Set up a fabric API server that can execute patterns
2. Configure `FABRIC_API_URL` and `FABRIC_API_KEY` in environment
3. The API should accept POST requests to `/execute` with:
   ```json
   {
     "pattern": "pattern_name",
     "input": "text to process"
   }
   ```

## Monitoring

- Check Vercel Dashboard for deployment status
- Monitor function logs for errors
- Set up alerts for failed logins

## Support

For issues, check:
- Vercel deployment logs
- Browser console for client-side errors
- API route responses in Network tab