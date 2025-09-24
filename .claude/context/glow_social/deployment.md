# Glow Social Deployment Configuration

## CRITICAL: Project Locations
- **Glow Social App**: ~/Documents/projects/glow-social-app (THIS deploys to Vercel)
- **PAI**: ~/Documents/projects/PAI (This is just configuration, NEVER deploys)
- **Fabric**: ~/Documents/projects/fabric (This is just patterns, NEVER deploys)

## GitHub Repository
- Glow Social Repo: /github.com/glowsocial/my-project-name
- This is the ONLY repo that connects to Vercel
- Main branch: main

## Vercel Setup
- Project name in Vercel:/glowsocial/
- ONLY connected to the glow-social-app GitHub repo
- Production domain: app.glowsocial.com

## Correct Deployment Process
1. Make changes in ~/Documents/projects/glow-social-app
2. cd ~/Documents/projects/glow-social-app (MUST be in this directory)
3. git add .
4. git commit -m "your message"
5. git push origin main
6. Vercel auto-deploys from the glow-social-app repo

## NEVER DO THIS
- Never push from PAI directory
- Never push from fabric directory  
- Never create Vercel projects for PAI or fabric
- These are local tools only!