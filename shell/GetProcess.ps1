#? Extra
# COMANDO QUE REGRESA LOS 5 PROCESOS QUE MAS ESTA CONSUMIENDO EN EL EQUIPO

Get-Process | Sort-Object -Property WorkingSet -Descending | Select-Object -First 5 -Property Name, Id, CPU, WorkingSet