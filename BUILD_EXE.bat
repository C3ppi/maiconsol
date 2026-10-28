@echo off
cd /d "%~dp0"
python -m pip install pyinstaller
python -m pip install -r requirements.txt
python -m PyInstaller --noconfirm --name ABSOL --console --add-data "absol\pools.json;absol" --add-data "absol\frontend;absol\frontend" --add-data "absol\data;absol\data" run.py
echo Copie o padrao.pak para dist\ABSOL\
pause
