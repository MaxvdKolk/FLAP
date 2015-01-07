var tipuesearch = {"pages":[{"text":"FLAP FLAP, Fortran command Line Arguments Parser for poor men A very simple and stupid tool for building easily nice Command Line Interface for modern Fortran projects. A Taste of FLAP Running the provided test program, flap_test , a taste of FLAP is served: +--> flap_test, a testing program for FLAP library\n+--> Parsing Command Line Arguments | --> The Command Line Interface ( CLI ) has the following options | -->   flap_test [ value ] --string value [ --integer value ] [ --real value ] [ --boolean ] [ --boolean_val value ] [ --integer_list value#1 value#2 value#3 ] [ --help ] [ --version ] | --> Each Command Line Argument ( CLA ) has the following meaning: | --> [ value ] | -->     Positional real input | -->     It is a positional CLA having position \"1-th\" | -->     It is a optional CLA which default value is \"1.0\" | --> [ --string value ] or [ -s value ] | -->     String input | -->     It is a non optional CLA thus must be passed to CLI | --> [ --integer value ] or [ -i value ] with value chosen in: ( 1,3,5 ) | -->     Integer input with fixed range | -->     It is a optional CLA which default value is \"1\" | --> [ --real value ] or [ -r value ] | -->     Real input | -->     It is a optional CLA which default value is \"1.0\" | --> [ --boolean ] or [ -b ] | -->     Boolean input | -->     It is a optional CLA which default value is \".false.\" | --> [ --boolean_val value ] or [ -bv value ] | -->     Valued boolean input | -->     It is a optional CLA which default value is \".true.\" | --> [ --integer_list value#1 value#2 value#3 ] or [ -il value#1 value#2 value#3 ] | -->     Integer list input | -->     It is a optional CLA which default value is \"1 8 32\" | --> [ --help ] or [ -h ] | -->     Print this help message | -->     It is a optional CLA | --> [ --version ] or [ -v ] | -->     Print version | -->     It is a optional CLA | --> Usage examples: | -->   - ) flap_test -s 'Hello FLAP' | -->   - ) flap_test -s 'Hello FLAP' -i -2 # printing error... | -->   - ) flap_test -s 'Hello FLAP' -i 3 -r 33.d0 | -->   - ) flap_test -s 'Hello FLAP' -integer_list 10 -3 87 | -->   - ) flap_test 33.0 -s 'Hello FLAP' -i 5 | -->   - ) flap_test -string 'Hello FLAP' -boolean Not so bad for just a very few statements as the following: ... write ( stdout , '(A)' ) '+--> flap_test, a testing program for FLAP library' ! initializing CLI call cli % init ( progname = 'flap_test' , & version = 'v0.0.1' , & examples = [ \"flap_test -s 'Hello FLAP'                          \" ,& \"flap_test -s 'Hello FLAP' -i -2 # printing error...\" ,& \"flap_test -s 'Hello FLAP' -i 3 -r 33.d0            \" ,& \"flap_test -s 'Hello FLAP' -integer_list 10 -3 87   \" ,& \"flap_test 33.0 -s 'Hello FLAP' -i 5                \" ,& \"flap_test -string 'Hello FLAP' -boolean            \" ]) ! setting CLAs call cli % add ( pref = '|-->' , switch = '--string' , switch_ab = '-s' , help = 'String input' , required = . true ., act = 'store' , error = error ) call cli % add ( pref = '|-->' , switch = '--integer' , switch_ab = '-i' , help = 'Integer input with fixed range' , required = . false ., act = 'store' , def = '1' , choices = '1,3,5' , error = error ) call cli % add ( pref = '|-->' , switch = '--real' , switch_ab = '-r' , help = 'Real input' , required = . false ., act = 'store' , def = '1.0' , error = error ) call cli % add ( pref = '|-->' , switch = '--boolean' , switch_ab = '-b' , help = 'Boolean input' , required = . false ., act = 'store_true' , def = '.false.' , error = error ) call cli % add ( pref = '|-->' , switch = '--boolean_val' , switch_ab = '-bv' , help = 'Valued boolean input' , required = . false ., act = 'store' , def = '.true.' , error = error ) call cli % add ( pref = '|-->' , switch = '--integer_list' , switch_ab = '-il' , help = 'Integer list input' , required = . false ., act = 'store' , nargs = '3' , def = '1 8 32' , error = error ) call cli % add ( pref = '|-->' , positional = . true ., position = 1 , help = 'Positional real input' , required = . false ., def = '1.0' , error = error ) ! parsing CLI write ( stdout , '(A)' ) '+--> Parsing Command Line Arguments' call cli % parse ( error = error , pref = '|-->' ) ... For a practical example of FLAP usage see POG source file at line 85 . Go to Top or Toc Table of Contents Team Members What is FLAP? Main features Todos Requirements Copyrights Usage API Initializing CLI with personalized help messages Adding a new CLA to CLI Parsing the CLI Getting a CLA value from parsed CLI Compile Testing Program Version History Go to Top or Toc Team Members Stefano Zaghi stefano.zaghi@gmail.com Go to Top or Toc What is FLAP? Modern Fortran standards (2003+) have introduced support for Command Line Arguments (CLA), thus it is possible to construct nice and effective Command Line Interface (CLI). FLAP is a small library designed to simplify the (repetitive) construction of complicated CLI in pure Fortran (standard 2003+). FLAP has been inspired by the python module argparse trying to mimic it. Once you have defined the arguments are required by means of a user-friendly method of the CLI, FLAP will parse the CLAs for you. It is worthy of note that FLAP, as argparse , also automatically generates help and usage messages and issues errors when users give the program invalid arguments. Go to Top or Toc Main features User-friendly methods for building flexible and effective Command Line Interfaces (CLI); support optional and non optional Command Line Argument (CLA); support boolean CLA; support positional CLA; support list of allowable values for defined CLA with automatic consistency check; support multiple valued (list of values) CLA; automatic generation of help and usage messages; self-consistency-check of CLA definition; consistency-check of whole CLI definition; errors trapping for invalid CLI usage; Go to Top or Toc Todos Try docopt features; any feature request is welcome! Go to Top or Toc Requirements Modern Fortran Compiler (standard 2003+); a lot of patience with the author. FLAP is developed on a GNU/Linux architecture. For Windows architecture there is no support, however it should be work out-of-the-box. Go to Top or Toc Copyrights FLAP is an open source project, it is distributed under the GPL v3 . Anyone is interest to use, to develop or to contribute to FLAP is welcome. Go to Top or Toc Usage FLAP is a module library.\nFLAP is currently composed by one module, namely Data_Type_Command_Line_Interface.f90 , where two derived types are defined:\n1. Type_Command_Line_Argument ;\n2. Type_Command_Line_Interface . The first one is a back-end handling CLAs while the latter is the front-end providing all you need to handle your CLI. Two auxiliary modules, IR_Precision.f90 and Lib_IO_Misc.f90 are used for minor tasks. Finally, a testing program flap_test is provided showing a basic example of FLAP usage. To start using FLAP and declaring your CLI, you must import its main module: ... USE Data_Type_Command_Line_Interface ... type ( Type_Command_Line_Interface ) :: CLI Now that you have your CLI declared you can start using it. The API to handle it follows. API The main CLI object, that is the only one you must know, is Type_Command_Line_Interface type , public :: Type_Command_Line_Interface integer ( I4P ) :: Na = 0_I4P !< Number of CLA. integer ( I4P ) :: Na_required = 0_I4P !< Number of command line arguments that CLI requires. integer ( I4P ) :: Na_optional = 0_I4P !< Number of command line arguments that are optional for CLI. type ( Type_Command_Line_Argument ), allocatable :: cla (:) !< CLA list [1:Na]. character ( len = :), allocatable :: progname !< Program name. character ( len = :), allocatable :: version !< Program version. character ( len = :), allocatable :: help !< Help message introducing the CLI usage. character ( len = :), allocatable :: examples (:) !< Examples of correct usage. logical :: disable_hv = . false . !< Disable automatic inserting of 'help' and 'version' CLAs. contains procedure :: free ! Procedure for freeing dynamic memory. procedure :: init ! Procedure for initializing CLI. procedure :: add ! Procedure for adding CLA to CLAs list. procedure :: check ! Procedure for checking CLAs data consistenc. procedure :: passed ! Procedure for checking if a CLA has been passed. procedure :: parse ! Procedure for parsing Command Line Interfaces. generic :: get => get_cla_cli , get_cla_list_cli ! Procedure for getting CLA value(s) from CLAs list parsed. final :: finalize ! Procedure for freeing dynamic memory when finalizing. ! operators overloading generic :: assignment ( = ) => assign_cli ! private procedures procedure , private :: get_cla_cli procedure , private :: get_cla_list_cli procedure , pass ( self1 ), private :: assign_cli endtype Type_Command_Line_Interface Fews methods are provided within this derived type: free for freeing the CLI memory; init for initializing CLI with user defined help messages; add for adding a CLA to the CLI; check for checking the CLAs definition consistency; passed for checking is a particular CLA has been actually passed; parse for parsing all passed CLAs accordingly to the list previously defined for building up the CLI; get for returning a particular CLA value and storing it into user-defined variable. Essentially, for building up and using a minimal CLI you should follow the 4 steps: declare a CLI variable: type ( Type_Command_Line_Interface ) :: cli adding one or more CLA definition to the CLI: call cli % add ( switch = '-o' , help = 'Output file name' , def = 'myfile.md' , error = error ) more details on how declare a CLA are reported in the followings; parsing the actually passed command line arguments: call cli % parse ( error = error ) more details on parsing method are reported in the followings; getting parsed values and storing into user-defined variables: call cli % get ( switch = '-o' , val = OutputFilename , error = error ) OutputFilename and error being previously defined variables. Optionally you can initialize CLI with custom help messages by means of init method. Initializing CLI with personalized help messages CLI data type can already (quasi-automatically) handle CLAs through its default values (provided from the baseline variable declaration, i.e. type(Type_Command_Line_Interface):: cli ). However, in order to improve the clearness CLI messages you can personalized help messages by means of init method (that remains an optional step): call cli % init ( progname , version , help , examples , disable_hv ) where character ( * ), optional , intent ( IN ) :: progname !< Program name. character ( * ), optional , intent ( IN ) :: version !< Program version. character ( * ), optional , intent ( IN ) :: help !< Help message introducing the CLI usage. character ( * ), optional , intent ( IN ) :: examples ( 1 :) !< Examples of correct usage. logical , optional , intent ( IN ) :: disable_hv !< Disable automatic inserting of 'help' and 'version' CLAs. The dummy arguments should be auto-explicative. Note that the help and examples dummy arguments are used for printing a pretty help message explaining the CLI usage, thus should be always provided even if they are optional arguments. Moreover, due the Fortran limitations, the array containing the examples must have character elements with the same length, thus trailing white spaces must padded to short examples. The only not so clear argument of init method is disable_hv . Disabling automatic Help and Version FLAP automatically add 2 special CLA to CLI: a CLA for printing a help message explaining the correct use of the CLI; a CLA for printing the version (if defined when the CLI is initialized) of the program. This two CLAs has the following default switches: help : switch --help , abbreviated switch -h ; version : switch --version , abbreviated switch -v ; However, FLAP before adding these two CLAs to the CLI checks if these switches have been already used and in case does not add them. To disable such an automatic CLAs creation initialized the CLI with: call cli % init (..., disable_hv = . true .) Go to Top or Toc Adding a new CLA to CLI CLA cannot be directly defined and modified: to handle a CLA you must use CLI methods. Adding CLA to CLI is performed through the add method: call cli % add ( pref , switch , switch_ab , help , required , positional , position , act , def , nargs , choices , error ) where character ( * ), optional , intent ( IN ) :: pref !< Prefixing string. character ( * ), optional , intent ( IN ) :: switch !< Switch name. character ( * ), optional , intent ( IN ) :: switch_ab !< Abbreviated switch name. character ( * ), optional , intent ( IN ) :: help !< Help message describing the CLA. logical , optional , intent ( IN ) :: required !< Flag for set required argument. logical , optional , intent ( IN ) :: positional !< Flag for checking if CLA is a positional or a named CLA. integer ( I4P ), optional , intent ( IN ) :: position !< Position of positional CLA. character ( * ), optional , intent ( IN ) :: act !< CLA value action. character ( * ), optional , intent ( IN ) :: def !< Default value. character ( * ), optional , intent ( IN ) :: nargs !< Number of arguments consumed by CLA. character ( * ), optional , intent ( IN ) :: choices !< List of allowable values for the argument. integer ( I4P ), intent ( OUT ) :: error !< Error trapping flag. The dummy arguments should be auto-explicative. Note that the help dummy argument is used for printing a pretty help message explaining the CLI usage, thus should be always provided even if CLA is an optional argument. It is also worthy of note that the abbreviated switch is set equal to switch name (if passed) if no otherwise defined. Moreover, one between switch and position must be defined: if switch is defined then a named CLA is initialed, otherwise position must be defined (with positional=.true. ) and a positional CLA is initialized. The following rules apply:\n+ pref string is used as prefixing string for any messages on standard out/err;\n+ if required is set to .false. a default value must be defined, even if it is a null string;\n+ no matter the type of CLA value is (real, integer, etc...) the definition of default value for an optional CLA must be always a string, e.g. def='1' or def='1.0' ; the actual type casting is performed when the CLA value is gotten by means of the get method: the type casting is performed by means of the actual type (and kind) of the variable used for storing CLA value;\n+ presently the possible actions of CLA are (all actions definitions are case insensitive):\n    + act=store , the CLA stores a value that must be passed after the CLA switch for named CLA;\n    + act=store_true , the CLA stores .true. ;\n    + act=store_false , the CLA stores .false. ;\n    + act=print_help , the CLA triggers the printing of the help message that is built with the help messages of all defined CLAs and the help message of CLI;\n    + act=print_version , the CLA triggers the printing the program version; if the version is not defined when the CLI is initialized the message will contain version unknown . When a CLA is added a self-consistency-check is performed, e.g. it is checked if an optional CLA has a default value or if one of position and switch has been passed. In case the self-consistency-check fails an error code is returned and an error message is printed to stderr . Note that choices must be a comma-separated list of allowable values and if it has been specified the passed value is checked to be consistent with this list when the get method is invoked: an error code is returned and if the value is not into the specified range an error message is printed to stderr . However the value of CLA is not modified and it is equal to the passed value. Go to Top or Toc Parsing the CLI The complete signature of parse method is the following: call cli % parse ( pref , error ) where character ( * ), optional , intent ( IN ) :: pref !< Prefixing string. integer ( I4P ), intent ( OUT ) :: error !< Error trapping flag. The dummy arguments should be auto-explicative. It is worthy of note that when parse method is invoked a consistency-check is performed: in particular it is checked that all named CLAs (the non positional ones having defined the switch name) have a unique switch name in order to avoid ambiguity. The help messages are print if one of the following issues arise:\n- the help CLA is passed;\n- the switch name of unknown CLA is passed;\n- the number of passed CLAs is less than the required CLAs previously defined. Go to Top or Toc Getting a CLA value from parsed CLI After the CLI has been parsed, the user is allowed to get any of the defined CLA value. Accordingly to the user-definition, a CLA value can be obtained either by the switch name (for named CLA) or by the CLA position (for positional CLA): call cli % get ( switch = '-r' , val = rval , error = err ) or call cli % get ( position = 1 , val = prval , error = err ) where rval and prval are two previously defined variables. Currently, the val variable can be only scalar of types integer , real , logical and character . The complete API of cli%get is the following: call cli % get ( pref , switch , position , val , error ) where the signature of get is: character ( * ), optional , intent ( IN ) :: pref !< Prefixing string. character ( * ), optional , intent ( IN ) :: switch !< Switch name. integer ( I4P ), optional , intent ( IN ) :: position !< Position of positional CLA. class ( * ), intent ( INOUT ) :: val !< CLA value. integer ( I4P ), intent ( OUT ) :: error !< Error trapping flag. The dummy arguments should be auto-explicative. Note that the switch passed can be also the abbreviated form if defined differently from the extended one. If no switch neither position is passed and error is arisen. Moreover, the type of the value returned is chosen accordingly to actual val argument passed: inside the get method val is an unlimited polymorphic variable which type is defined only when the user passes the actual val container. Note that for multiple valued (list) CLA, the get method accept also array val : character ( * ), optional , intent ( IN ) :: pref !< Prefixing string. character ( * ), optional , intent ( IN ) :: switch !< Switch name. integer ( I4P ), optional , intent ( IN ) :: position !< Position of positional CLA. class ( * ), intent ( INOUT ) :: val ( 1 :) !< CLA value. integer ( I4P ), intent ( OUT ) :: error !< Error trapping flag. however, the get method is invoked exactly with the same signature of single valued CLA as above: get is a generic, user-friendly method that automatically handles both scalar and array val variables. Go to Top or Toc Compile Testing Program As a practical example of FLAP usage a testing program named flap_test is provided. You can compile with Fortran compiler supporting modern standards (2003+). Note that the dependency hierarchy of modules USE statement must be respected in order to successfully compile the program. If you are tired by frustrating usage of makefiles & co. you can try FoBiS.py for building the program. A fobos file is provided with FLAP. To build it just type into the root directory of FLAP: FoBiS.py build Go to Top or Toc Version History In the following the changelog of most important releases is reported. v0.0.1 Download ZIP ball or TAR one Stable Release. Fully backward compatible. Go to Top or Toc Developer Info Stefano Zaghi","tags":"home","loc":"index.html","title":" FLAP "},{"text":"Procedures Procedure Location Procedure Type Description bcton IR_Precision Interface bit_size IR_Precision Interface bstr IR_Precision Interface byte_size IR_Precision Interface check_endian IR_Precision Subroutine count Lib_IO_Misc Interface cton IR_Precision Interface Dir_Not_Found Lib_IO_Misc Subroutine File_Not_Found Lib_IO_Misc Function get_extension Lib_IO_Misc Function Get_Unit Lib_IO_Misc Function inquire_dir Lib_IO_Misc Function IR_init IR_Precision Subroutine IR_Print IR_Precision Subroutine lc_file Lib_IO_Misc Function Lower_Case Lib_IO_Misc Function set_extension Lib_IO_Misc Function str IR_Precision Interface strz IR_Precision Interface tags_match Lib_IO_Misc Subroutine tokenize Lib_IO_Misc Subroutine unique Lib_IO_Misc Function Upper_Case Lib_IO_Misc Function","tags":"list procedures","loc":"lists/procedures.html","title":"\nAll Procedures – FLAP\n"},{"text":"Source Files File Description Data_Type_Command_Line_Interface.f90 flap_test.f90 IR_Precision.f90 Lib_IO_Misc.f90","tags":"list files","loc":"lists/files.html","title":"\nAll Files – FLAP\n"},{"text":"Modules Module Source File Description Data_Type_Command_Line_Interface Data_Type_Command_Line_Interface.f90 FLAP is A very simple and stupid tool for building easily nice Command Line Interface for modern Fortran projects. It is based\n on Type_Command_Line_Interface (CLI), a derived type implementing a flexible Command Line Interface (CLI). IR_Precision IR_Precision.f90 Lib_IO_Misc Lib_IO_Misc.f90","tags":"list modules","loc":"lists/modules.html","title":"\nAll Modules – FLAP\n"},{"text":"Derived Types Type Location Extends Description Type_Command_Line_Interface Data_Type_Command_Line_Interface None Derived type implementing a flexible Command Line Interface (CLI).","tags":"list derived types","loc":"lists/types.html","title":"\nAll Types – FLAP\n"},{"text":"IR_Precision.f90 Source File Source File IR_Precision.f90","tags":"","loc":"sourcefile/ir_precision.f90.html","title":"IR_Precision.f90 – FLAP"},{"text":"flap_test.f90 Source File Source File flap_test.f90","tags":"","loc":"sourcefile/flap_test.f90.html","title":"flap_test.f90 – FLAP"},{"text":"Data_Type_Command_Line_Interface.f90 Source File Source File Data_Type_Command_Line_Interface.f90","tags":"","loc":"sourcefile/data_type_command_line_interface.f90.html","title":"Data_Type_Command_Line_Interface.f90 – FLAP"},{"text":"Lib_IO_Misc.f90 Source File Source File Lib_IO_Misc.f90","tags":"","loc":"sourcefile/lib_io_misc.f90.html","title":"Lib_IO_Misc.f90 – FLAP"},{"text":"Type_Command_Line_Interface Derived Type Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface Type_Command_Line_Interface","tags":"","loc":"type/type_command_line_interface.html","title":"Type_Command_Line_Interface – FLAP "},{"text":"check_endian Subroutine Source File IR_Precision.f90 IR_Precision check_endian","tags":"","loc":"proc/check_endian.html","title":"check_endian – FLAP"},{"text":"IR_init Subroutine Source File IR_Precision.f90 IR_Precision IR_init","tags":"","loc":"proc/ir_init.html","title":"IR_init – FLAP"},{"text":"IR_Print Subroutine Source File IR_Precision.f90 IR_Precision IR_Print","tags":"","loc":"proc/ir_print.html","title":"IR_Print – FLAP"},{"text":"bit_size Interface Source File IR_Precision.f90 IR_Precision bit_size","tags":"","loc":"interface/bit_size.html","title":"bit_size – FLAP"},{"text":"byte_size Interface Source File IR_Precision.f90 IR_Precision byte_size","tags":"","loc":"interface/byte_size.html","title":"byte_size – FLAP"},{"text":"str Interface Source File IR_Precision.f90 IR_Precision str","tags":"","loc":"interface/str.html","title":"str – FLAP"},{"text":"strz Interface Source File IR_Precision.f90 IR_Precision strz","tags":"","loc":"interface/strz.html","title":"strz – FLAP"},{"text":"cton Interface Source File IR_Precision.f90 IR_Precision cton","tags":"","loc":"interface/cton.html","title":"cton – FLAP"},{"text":"bstr Interface Source File IR_Precision.f90 IR_Precision bstr","tags":"","loc":"interface/bstr.html","title":"bstr – FLAP"},{"text":"bcton Interface Source File IR_Precision.f90 IR_Precision bcton","tags":"","loc":"interface/bcton.html","title":"bcton – FLAP"},{"text":"Get_Unit Function Source File Lib_IO_Misc.f90 Lib_IO_Misc Get_Unit","tags":"","loc":"proc/get_unit.html","title":"Get_Unit – FLAP"},{"text":"get_extension Function Source File Lib_IO_Misc.f90 Lib_IO_Misc get_extension","tags":"","loc":"proc/get_extension.html","title":"get_extension – FLAP"},{"text":"set_extension Function Source File Lib_IO_Misc.f90 Lib_IO_Misc set_extension","tags":"","loc":"proc/set_extension.html","title":"set_extension – FLAP"},{"text":"inquire_dir Function Source File Lib_IO_Misc.f90 Lib_IO_Misc inquire_dir","tags":"","loc":"proc/inquire_dir.html","title":"inquire_dir – FLAP"},{"text":"lc_file Function Source File Lib_IO_Misc.f90 Lib_IO_Misc lc_file","tags":"","loc":"proc/lc_file.html","title":"lc_file – FLAP"},{"text":"Upper_Case Function Source File Lib_IO_Misc.f90 Lib_IO_Misc Upper_Case","tags":"","loc":"proc/upper_case.html","title":"Upper_Case – FLAP"},{"text":"Lower_Case Function Source File Lib_IO_Misc.f90 Lib_IO_Misc Lower_Case","tags":"","loc":"proc/lower_case.html","title":"Lower_Case – FLAP"},{"text":"unique Function Source File Lib_IO_Misc.f90 Lib_IO_Misc unique","tags":"","loc":"proc/unique.html","title":"unique – FLAP"},{"text":"File_Not_Found Function Source File Lib_IO_Misc.f90 Lib_IO_Misc File_Not_Found","tags":"","loc":"proc/file_not_found.html","title":"File_Not_Found – FLAP"},{"text":"tokenize Subroutine Source File Lib_IO_Misc.f90 Lib_IO_Misc tokenize","tags":"","loc":"proc/tokenize.html","title":"tokenize – FLAP"},{"text":"tags_match Subroutine Source File Lib_IO_Misc.f90 Lib_IO_Misc tags_match","tags":"","loc":"proc/tags_match.html","title":"tags_match – FLAP"},{"text":"Dir_Not_Found Subroutine Source File Lib_IO_Misc.f90 Lib_IO_Misc Dir_Not_Found","tags":"","loc":"proc/dir_not_found.html","title":"Dir_Not_Found – FLAP"},{"text":"count Interface Source File Lib_IO_Misc.f90 Lib_IO_Misc count","tags":"","loc":"interface/count.html","title":"count – FLAP"},{"text":"IR_Precision Module Source File IR_Precision.f90 IR_Precision","tags":"","loc":"module/ir_precision.html","title":"IR_Precision – FLAP"},{"text":"Data_Type_Command_Line_Interface Module Stefano Zaghi 2014-10-22 GNU Public License version 3. 0.0.1 Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface","tags":"","loc":"module/data_type_command_line_interface.html","title":"Data_Type_Command_Line_Interface – FLAP"},{"text":"Lib_IO_Misc Module Source File Lib_IO_Misc.f90 Lib_IO_Misc","tags":"","loc":"module/lib_io_misc.html","title":"Lib_IO_Misc – FLAP"},{"text":"FLAP_Test Program Source File flap_test.f90 FLAP_Test","tags":"","loc":"program/flap_test.html","title":"FLAP_Test – FLAP"}]}