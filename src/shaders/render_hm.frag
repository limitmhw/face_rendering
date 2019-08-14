#version 330 core
out vec4 frag_color;

in VS_OUT {
    vec2 tex_cord;
    vec3 normal;
    vec3 tgt;
    vec3 pos;
} fs_in;

uniform sampler2D hm;
uniform vec3 lht_pos;
uniform vec3 lht_color;
uniform float albedo;




void main()
{    
    vec3 lht_clr = lht_color;
    vec3 obj_clr = vec3(albedo, albedo, albedo);

    // ambient
    float abnt = 0.1;
    vec3 ambient = abnt * lht_clr;
    ambient = ambient * obj_clr;


    // diffuse
    vec3 N = normalize(fs_in.normal);
    vec3 T = normalize(fs_in.tgt- dot(fs_in.normal, fs_in.tgt)*fs_in.normal);
    vec3 B = cross(N,T);

    mat3 TBN= mat3(T,B,N);

    vec2 uv = vec2(fs_in.tex_cord.x, 1-fs_in.tex_cord.y);
    vec3 map_normal = texture2D(hm, uv).xyz;
    vec3 normal = 2.0*map_normal-vec3(1.0,1.0,1.0);
    normal = normalize(TBN*normal);

    vec3 lht_dir = normalize(lht_pos - fs_in.pos);

    float diff = max(dot(normal, lht_dir), 0.0);
    vec3 diffuse = diff*lht_clr;

    vec3 res = (ambient + diffuse)*obj_clr;

    frag_color = vec4(res, 1.0f);

}
