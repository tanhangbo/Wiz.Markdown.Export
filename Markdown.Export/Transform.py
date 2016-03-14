# -*- coding: utf-8 -*-

import os

process_dir = "D:\\markdown_export\\"

def my_process(line):
    if line.startswith("![]("):
        start_pos = line.index("/")
        line = "![](" + "image" + line[start_pos:]
    return line;


r_file = open(process_dir + "temp.txt", "r")
w_file = open(process_dir + "1.md", "wb")



while 1:
    line = r_file.readline()
    if not line:
        break
    w_file.write(my_process(line))

w_file.close()
r_file.close()
	
os.rename(process_dir + "temp_files", process_dir + "image")
os.remove(process_dir + "temp.txt");
os.remove(process_dir + "temp.html");
os.remove(process_dir + "Transform.py");



#os.system("pause")




