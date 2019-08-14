### Project description
This project face render of **ICCV 2019 Oral paper:** __Photo-Realistic Facial Details Synthesis from Single Image__ [[1]](https://arxiv.org/abs/1903.10873)

### Dependency library
all dependent libs are included in folder **thirds**

### Project structure
```
├──  assets                         - assets data
│
├──  thirds                         - dependent libs
│
├──  build                      
│
├──  src                            - header files
│    └── includes                   - main
│    └── renderer_hm                - cpp/cc files
│    └── shaders                    - shders folder
│    └── CMakeLists.txt             - cmake list
│    └── depvars.h                  -  
│ 
├──  exe                            - windows executable file
│ 
├──  imgs                            - screens about this software 
│ 
├──  README.md  
│ 
├──  .gitignore                     
```

### Cmake build Visual Studio 2017 Project
```cpp
cd to the root of this project
mkdir build
cd build
cmake -A X64 -D CMAKE_PREFIX_PATH=/root/to/thirds ../src
```

### Run executable
```cpp
./hmrenderer.exe  /root/to/obj /root/to/norm /root/to/shader
```

### Some demo 

![alt text](https://github.com/gg-z/face_rendering/imgs/screen_shot1.png "demo 0")


![alt text](https://github.com/gg-z/face_rendering/imgs/screen_shot2.png "demo 1")
