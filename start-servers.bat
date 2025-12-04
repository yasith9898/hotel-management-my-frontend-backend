@echo off
echo ========================================
echo  MERN Hotel Management System
echo  Starting Backend Server...
echo ========================================
cd backend
start cmd /k "npm run dev"
echo.
echo Backend server starting on http://localhost:5000
echo.
echo ========================================
echo  Starting Frontend Server...
echo ========================================
cd ..\frontend
start cmd /k "npm run dev"
echo.
echo Frontend server starting on http://localhost:3000
echo.
echo ========================================
echo  Both servers are starting!
echo  Please wait a moment for them to load.
echo ========================================
echo.
echo Press any key to exit this window...
pause > nul
