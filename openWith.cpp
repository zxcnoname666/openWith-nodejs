#include "napi.h"
#include "shlobj_core.h"

using namespace std;

Napi::Boolean open(const Napi::CallbackInfo& info)
{
    Napi::Env env = info.Env();
    string str = info[0].ToString().Utf8Value();
    wstring temp = wstring(str.begin(), str.end());
    LPCWSTR file = temp.c_str();

    OPENASINFO Info = { 0 };
    Info.pcszFile = file;
    Info.pcszClass = NULL;
    Info.oaifInFlags = OAIF_EXEC;

    return Napi::Boolean::New(env, SHOpenWithDialog(NULL, &Info) == S_OK ? true : false);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set("open", Napi::Function::New(env, open));
    return exports;
}

NODE_API_MODULE(openWith, Init);