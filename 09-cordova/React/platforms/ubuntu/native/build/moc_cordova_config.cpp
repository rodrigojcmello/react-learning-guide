/****************************************************************************
** Meta object code from reading C++ file 'cordova_config.hpp'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.4.2)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../build/src/cordova_config.hpp"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'cordova_config.hpp' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.4.2. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_CordovaInternal__Config_t {
    QByteArrayData data[6];
    char stringdata[65];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_CordovaInternal__Config_t, stringdata) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_CordovaInternal__Config_t qt_meta_stringdata_CordovaInternal__Config = {
    {
QT_MOC_LITERAL(0, 0, 23), // "CordovaInternal::Config"
QT_MOC_LITERAL(1, 24, 5), // "appId"
QT_MOC_LITERAL(2, 30, 0), // ""
QT_MOC_LITERAL(3, 31, 10), // "appVersion"
QT_MOC_LITERAL(4, 42, 10), // "fullscreen"
QT_MOC_LITERAL(5, 53, 11) // "orientation"

    },
    "CordovaInternal::Config\0appId\0\0"
    "appVersion\0fullscreen\0orientation"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_CordovaInternal__Config[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
       4,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // methods: name, argc, parameters, tag, flags
       1,    0,   34,    2, 0x02 /* Public */,
       3,    0,   35,    2, 0x02 /* Public */,
       4,    0,   36,    2, 0x02 /* Public */,
       5,    0,   37,    2, 0x02 /* Public */,

 // methods: parameters
    QMetaType::QString,
    QMetaType::QString,
    QMetaType::Bool,
    QMetaType::Int,

       0        // eod
};

void CordovaInternal::Config::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        Config *_t = static_cast<Config *>(_o);
        switch (_id) {
        case 0: { QString _r = _t->appId();
            if (_a[0]) *reinterpret_cast< QString*>(_a[0]) = _r; }  break;
        case 1: { QString _r = _t->appVersion();
            if (_a[0]) *reinterpret_cast< QString*>(_a[0]) = _r; }  break;
        case 2: { bool _r = _t->fullscreen();
            if (_a[0]) *reinterpret_cast< bool*>(_a[0]) = _r; }  break;
        case 3: { int _r = _t->orientation();
            if (_a[0]) *reinterpret_cast< int*>(_a[0]) = _r; }  break;
        default: ;
        }
    }
}

const QMetaObject CordovaInternal::Config::staticMetaObject = {
    { &QObject::staticMetaObject, qt_meta_stringdata_CordovaInternal__Config.data,
      qt_meta_data_CordovaInternal__Config,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *CordovaInternal::Config::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *CordovaInternal::Config::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_CordovaInternal__Config.stringdata))
        return static_cast<void*>(const_cast< Config*>(this));
    return QObject::qt_metacast(_clname);
}

int CordovaInternal::Config::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 4)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 4;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 4)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 4;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
