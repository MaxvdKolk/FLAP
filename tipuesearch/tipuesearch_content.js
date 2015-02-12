var tipuesearch = {"pages":[{"text":"FLAP FLAP, Fortran command Line Arguments Parser for poor men FLAP is a pure Fortran (KISS) library for building easily nice Command Line Interfaces (CLI) for modern Fortran projects; FLAP is Fortran 2003+ standard compliant; FLAP is OOP designed; FLAP is a Free, Open Source Project. What is FLAP? Modern Fortran standards (2003+) have introduced support for Command Line Arguments (CLA), thus it is possible to construct nice and effective Command Line Interfaces (CLI). FLAP is a small library designed to simplify the (repetitive) construction of complicated CLI in pure Fortran (standard 2003+). FLAP has been inspired by the python module argparse trying to mimic it. Once you have defined the arguments that are required by means of a user-friendly method of the CLI, FLAP will parse the CLAs for you. It is worthy of note that FLAP, as argparse , also automatically generates help and usage messages and issues errors when users give the program invalid arguments. Go to Top Main features FLAP is inspired by the python great module argparse , thus many features are taken from it. Here the main features are listed. User-friendly methods for building flexible and effective Command Line Interfaces (CLI); comprehensive Command Line Arguments (CLA) support: support optional and non optional CLA; support boolean CLA; support positional CLA; support list of allowable values for defined CLA with automatic consistency check; support multiple valued (list of values) CLA; self-consistency-check of CLA definition; automatic generation of help and usage messages; consistency-check of whole CLI definition; errors trapping for invalid CLI usage; replicate all the useful features of argparse ; implement docopt features. Any feature request is welcome. Go to Top Copyrights FLAP is an open source project, it is distributed under the GPL v3 . Anyone is interest to use, to develop or to contribute to FLAP is welcome. Go to Top Documentation Besides this README file the FLAP documentation is contained into its own wiki . Detailed documentation of the API is contained into the GitHub Pages that can also be created locally by means of ford tool . A Taste of FLAP Running the provided test program, flap_test -h , a taste of FLAP is served: +--> flap_test, a testing program for FLAP library\n+--> Parsing Command Line Arguments | --> The Command Line Interface ( CLI ) has the following options | -->   flap_test [ value ] --string value [ --integer value ] [ --real value ] [ --boolean ] [ --boolean_val value ] [ --integer_list value#1 value#2 value#3 ] [ --help ] [ --version ] | --> Each Command Line Argument ( CLA ) has the following meaning: | --> [ value ] | -->     Positional real input | -->     It is a positional CLA having position \"1-th\" | -->     It is a optional CLA which default value is \"1.0\" | --> [ --string value ] or [ -s value ] | -->     String input | -->     It is a non optional CLA thus must be passed to CLI | --> [ --integer value ] or [ -i value ] with value chosen in: ( 1,3,5 ) | -->     Integer input with fixed range | -->     It is a optional CLA which default value is \"1\" | --> [ --real value ] or [ -r value ] | -->     Real input | -->     It is a optional CLA which default value is \"1.0\" | --> [ --boolean ] or [ -b ] | -->     Boolean input | -->     It is a optional CLA which default value is \".false.\" | --> [ --boolean_val value ] or [ -bv value ] | -->     Valued boolean input | -->     It is a optional CLA which default value is \".true.\" | --> [ --integer_list value#1 value#2 value#3 ] or [ -il value#1 value#2 value#3 ] | -->     Integer list input | -->     It is a optional CLA which default value is \"1 8 32\" | --> [ --help ] or [ -h ] | -->     Print this help message | -->     It is a optional CLA | --> [ --version ] or [ -v ] | -->     Print version | -->     It is a optional CLA | --> Usage examples: | -->   - ) flap_test -s 'Hello FLAP' | -->   - ) flap_test -s 'Hello FLAP' -i -2 # printing error... | -->   - ) flap_test -s 'Hello FLAP' -i 3 -r 33.d0 | -->   - ) flap_test -s 'Hello FLAP' -integer_list 10 -3 87 | -->   - ) flap_test 33.0 -s 'Hello FLAP' -i 5 | -->   - ) flap_test -string 'Hello FLAP' -boolean Not so bad for just a very few statements as the following: ... write ( stdout , '(A)' ) '+--> flap_test, a testing program for FLAP library' ! initializing CLI call cli % init ( progname = 'flap_test' , & version = 'v0.0.1' , & examples = [ \"flap_test -s 'Hello FLAP'                          \" ,& \"flap_test -s 'Hello FLAP' -i -2 # printing error...\" ,& \"flap_test -s 'Hello FLAP' -i 3 -r 33.d0            \" ,& \"flap_test -s 'Hello FLAP' -integer_list 10 -3 87   \" ,& \"flap_test 33.0 -s 'Hello FLAP' -i 5                \" ,& \"flap_test -string 'Hello FLAP' -boolean            \" ]) ! setting CLAs call cli % add ( pref = '|-->' , switch = '--string' , switch_ab = '-s' , help = 'String input' , required = . true ., act = 'store' , error = error ) call cli % add ( pref = '|-->' , switch = '--integer' , switch_ab = '-i' , help = 'Integer input with fixed range' , required = . false ., act = 'store' , def = '1' , choices = '1,3,5' , error = error ) call cli % add ( pref = '|-->' , switch = '--real' , switch_ab = '-r' , help = 'Real input' , required = . false ., act = 'store' , def = '1.0' , error = error ) call cli % add ( pref = '|-->' , switch = '--boolean' , switch_ab = '-b' , help = 'Boolean input' , required = . false ., act = 'store_true' , def = '.false.' , error = error ) call cli % add ( pref = '|-->' , switch = '--boolean_val' , switch_ab = '-bv' , help = 'Valued boolean input' , required = . false ., act = 'store' , def = '.true.' , error = error ) call cli % add ( pref = '|-->' , switch = '--integer_list' , switch_ab = '-il' , help = 'Integer list input' , required = . false ., act = 'store' , nargs = '3' , def = '1 8 32' , error = error ) call cli % add ( pref = '|-->' , positional = . true ., position = 1 , help = 'Positional real input' , required = . false ., def = '1.0' , error = error ) ! parsing CLI write ( stdout , '(A)' ) '+--> Parsing Command Line Arguments' call cli % parse ( error = error , pref = '|-->' ) ... For a practical example of FLAP usage see POG source file at line 85 . Go to Top Version History In the following the changelog of most important releases is reported. v0.0.1 Download ZIP ball or TAR one Stable Release. Fully backward compatible. Go to Top ChangeLog Version v0.0.1 First stable release. Developer Info Stefano Zaghi","tags":"home","loc":"index.html","title":" FLAP "},{"text":"Procedures Procedure Location Procedure Type Description add Data_Type_Command_Line_Interface Subroutine Procedure for adding CLA to CLAs list. add_signature Data_Type_Command_Line_Interface Subroutine Procedure for adding CLA signature to the CLI one. assign_cla Data_Type_Command_Line_Interface Subroutine Procedure for assignment between two selfs. assign_cli Data_Type_Command_Line_Interface Subroutine Procedure for assignment between two selfs. bctoi_I1P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bctoi_I2P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bctoi_I4P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bctoi_I8P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bcton IR_Precision Interface Procedure for converting bit-string to number, real or initeger, (bit-string to number type casting). bctor_R4P IR_Precision Function Procedure for converting bit-string to real. This function achieves casting of bit-string to real. bctor_R8P IR_Precision Function Procedure for converting bit-string to real. This function achieves casting of bit-string to real. bit_size IR_Precision Interface Overloading of the intrinsic bit_size function for computing the number of bits of (also) real and character variables. bit_size_chr IR_Precision Function Procedure for computing the number of bits of a character variable. bit_size_R16P IR_Precision Function Procedure for computing the number of bits of a real variable. bit_size_R4P IR_Precision Function Procedure for computing the number of bits of a real variable. bit_size_R8P IR_Precision Function Procedure for computing the number of bits of a real variable. bstr IR_Precision Interface Procedure for converting number, real and integer, to bit-string (number to bit-string type casting). bstr_I1P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_I2P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_I4P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_I8P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_R16P IR_Precision Function Procedure for converting real to string of bits. This function achieves casting of real to bit-string. bstr_R4P IR_Precision Function Procedure for converting real to string of bits. This function achieves casting of real to bit-string. bstr_R8P IR_Precision Function Procedure for converting real to string of bits. This function achieves casting of real to bit-string. byte_size IR_Precision Interface Overloading of the byte_size function for computing the number of bytes. byte_size_chr IR_Precision Function Procedure for computing the number of bytes of a character variable. byte_size_I1P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_I2P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_I4P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_I8P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_R16P IR_Precision Function Procedure for computing the number of bytes of a real variable. byte_size_R4P IR_Precision Function Procedure for computing the number of bytes of a real variable. byte_size_R8P IR_Precision Function Procedure for computing the number of bytes of a real variable. check Data_Type_Command_Line_Interface Subroutine Procedure for checking CLAs data consistency. check_choices_cla Data_Type_Command_Line_Interface Subroutine Procedure for checking if CLA value is in allowed choices. check_cla Data_Type_Command_Line_Interface Subroutine Procedure for checking CLA data consistency. check_endian IR_Precision Subroutine Subroutine for checking the type of bit ordering (big or little endian) of the running architecture. count Lib_Strings Interface Overloading intrinsic function count for counting substring occurences into strings. count_substring Lib_Strings Function Procedure for counting the number of occurences of a substring into a string. ctoi_I1P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. ctoi_I2P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. ctoi_I4P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. ctoi_I8P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. cton IR_Precision Interface Procedure for converting string to number, real or initeger, (string to number type casting). ctor_R16P IR_Precision Function Procedure for converting string to real. This function achieves casting of string to real. ctor_R4P IR_Precision Function Procedure for converting string to real. This function achieves casting of string to real. ctor_R8P IR_Precision Function Procedure for converting string to real. This function achieves casting of string to real. delete Lib_Strings Function Procedure for deleting substring from a string. digit IR_Precision Interface Procedure for computing the number of digits in decimal base of the input integer. digit_I1 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. digit_I2 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. digit_I4 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. digit_I8 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. Dir_Not_Found Lib_IO_Misc Function Procedure for printing to stderr a \"directory not found error\". File_Not_Found Lib_IO_Misc Function Procedure for printing to stderr a \"file not found error\". finalize Data_Type_Command_Line_Interface Subroutine Procedure for freeing dynamic memory when finalizing. finalize_cla Data_Type_Command_Line_Interface Subroutine Procedure for freeing dynamic memory when finalizing. free Data_Type_Command_Line_Interface Subroutine Procedure for freeing dynamic memory. free_cla Data_Type_Command_Line_Interface Subroutine Procedure for freeing dynamic memory. get_cla Data_Type_Command_Line_Interface Subroutine Procedure for getting CLA (single) value. get_cla_cli Data_Type_Command_Line_Interface Subroutine Procedure for getting CLA (single) value from CLAs list parsed. get_cla_list Data_Type_Command_Line_Interface Subroutine Procedure for getting CLA (multiple) value. get_cla_list_cli Data_Type_Command_Line_Interface Subroutine Procedure for getting CLA multiple values from CLAs list parsed. get_extension Lib_IO_Misc Function Procedure for extracting the extension of a filename. Get_Unit Lib_IO_Misc Function Procedure for obtaining a free logic unit for safely opening a file. init Data_Type_Command_Line_Interface Subroutine Procedure for initializing CLI. inquire_dir Lib_IO_Misc Subroutine Procedure for inquiring the presence of a directory. inquire_file Lib_IO_Misc Subroutine Procedure for inquiring the presence of a file. insert Lib_Strings Function Procedure for inserting substring into a string from a certaing position. IR_init IR_Precision Subroutine Procedure for initilizing module's variables that are not initialized into the definition specification. IR_Print IR_Precision Subroutine Procedure for printing to the standard output the kind definition of reals and integers and the utility variables. is_little_endian IR_Precision Function Procedure for checking if the type of the bit ordering of the running architecture is little endian. lc_file Lib_IO_Misc Function Procedure for calculating the number of lines (records) of a sequential file. Lower_Case Lib_Strings Function Procedure for converting the upper case characters of a string to lower case one. parse Data_Type_Command_Line_Interface Subroutine Procedure for parsing Command Line Interfaces by means of a previously initialized CLA list. passed Data_Type_Command_Line_Interface Function Procedure for checking if a CLA has been passed. print_cla Data_Type_Command_Line_Interface Subroutine Procedure for printing CLA data with a pretty format. re_match Lib_Strings Function Procedure for regular expression matching. read_file_as_stream Lib_IO_Misc Subroutine Procedure for reading a file as single characters stream. replace Lib_Strings Function Procedure for replacing substring into a string. set_extension Lib_IO_Misc Function Procedure for setting the extension of a filename. str IR_Precision Interface Procedure for converting number, real and integer, to string (number to string type casting). str_I1P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_I2P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_I4P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_I8P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_R16P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. str_R4P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. str_R8P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strf_I1P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_I2P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_I4P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_I8P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_R16P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strf_R4P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strf_R8P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strz IR_Precision Interface Procedure for converting number, integer, to string, prefixing with the right number of zeros (number to string type\n casting with zero padding). strz_I1P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. strz_I2P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. strz_I4P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. strz_I8P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. tags_match Lib_Strings Subroutine Procedure for parsing a string providing the substrings matching an enclosing pairs tags. tokenize Lib_Strings Subroutine Procedure for tokenizing a string in order to parse it. unique Lib_Strings Function Procedure for reducing to one (unique) multiple (sequential) occurrences of a characters substring into a string. Upper_Case Lib_Strings Function Procedure for converting the lower case characters of a string to upper case one.","tags":"list procedures","loc":"lists/procedures.html","title":"\nAll Procedures – FLAP\n"},{"text":"Source Files File Description Data_Type_Command_Line_Interface.f90 FLAP, Fortran command Line Arguments Parser for poor men flap_test.f90 A testing program for FLAP, Fortran command Line Arguments Parser for poor men IR_Precision.f90 Pure Fortran (2003+) library for ensuring codes portability Lib_IO_Misc.f90 Library of miscellanea procedures for input/output operations. Lib_Strings.f90 Library of miscellanea procedures for strings operations.","tags":"list files","loc":"lists/files.html","title":"\nAll Files – FLAP\n"},{"text":"Modules Module Source File Description Data_Type_Command_Line_Interface Data_Type_Command_Line_Interface.f90 FLAP, Fortran command Line Arguments Parser for poor men IR_Precision IR_Precision.f90 Pure Fortran (2003+) library for ensuring codes portability Lib_IO_Misc Lib_IO_Misc.f90 Library of miscellanea procedures for input/output operations. Lib_Strings Lib_Strings.f90 Library of miscellanea procedures for strings operations.","tags":"list modules","loc":"lists/modules.html","title":"\nAll Modules – FLAP\n"},{"text":"Derived Types Type Location Extends Description Type_Command_Line_Argument Data_Type_Command_Line_Interface None Derived type containing the useful data for handling command line arguments (CLA). Type_Command_Line_Interface Data_Type_Command_Line_Interface None Derived type implementing a flexible Command Line Interface (CLI).\n Procedure for freeing dynamic memory when finalizing.","tags":"list derived types","loc":"lists/types.html","title":"\nAll Types – FLAP\n"},{"text":"IR_Precision.f90 Source File Source File IR_Precision.f90","tags":"","loc":"sourcefile/ir_precision.f90.html","title":"IR_Precision.f90 – FLAP"},{"text":"flap_test.f90 Source File Source File flap_test.f90","tags":"","loc":"sourcefile/flap_test.f90.html","title":"flap_test.f90 – FLAP"},{"text":"Lib_Strings.f90 Source File Source File Lib_Strings.f90","tags":"","loc":"sourcefile/lib_strings.f90.html","title":"Lib_Strings.f90 – FLAP"},{"text":"Data_Type_Command_Line_Interface.f90 Source File Source File Data_Type_Command_Line_Interface.f90","tags":"","loc":"sourcefile/data_type_command_line_interface.f90.html","title":"Data_Type_Command_Line_Interface.f90 – FLAP"},{"text":"Lib_IO_Misc.f90 Source File Source File Lib_IO_Misc.f90","tags":"","loc":"sourcefile/lib_io_misc.f90.html","title":"Lib_IO_Misc.f90 – FLAP"},{"text":"Type_Command_Line_Argument Derived Type Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface Type_Command_Line_Argument","tags":"","loc":"type/type_command_line_argument.html","title":"Type_Command_Line_Argument – FLAP "},{"text":"Type_Command_Line_Interface Derived Type Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface Type_Command_Line_Interface","tags":"","loc":"type/type_command_line_interface.html","title":"Type_Command_Line_Interface – FLAP "},{"text":"is_little_endian Function Source File IR_Precision.f90 IR_Precision is_little_endian","tags":"","loc":"proc/is_little_endian.html","title":"is_little_endian – FLAP"},{"text":"bit_size_R16P Function Source File IR_Precision.f90 IR_Precision bit_size_R16P","tags":"","loc":"proc/bit_size_r16p.html","title":"bit_size_R16P – FLAP"},{"text":"bit_size_R8P Function Source File IR_Precision.f90 IR_Precision bit_size_R8P","tags":"","loc":"proc/bit_size_r8p.html","title":"bit_size_R8P – FLAP"},{"text":"bit_size_R4P Function Source File IR_Precision.f90 IR_Precision bit_size_R4P","tags":"","loc":"proc/bit_size_r4p.html","title":"bit_size_R4P – FLAP"},{"text":"bit_size_chr Function Source File IR_Precision.f90 IR_Precision bit_size_chr","tags":"","loc":"proc/bit_size_chr.html","title":"bit_size_chr – FLAP"},{"text":"byte_size_I8P Function Source File IR_Precision.f90 IR_Precision byte_size_I8P","tags":"","loc":"proc/byte_size_i8p.html","title":"byte_size_I8P – FLAP"},{"text":"byte_size_I4P Function Source File IR_Precision.f90 IR_Precision byte_size_I4P","tags":"","loc":"proc/byte_size_i4p.html","title":"byte_size_I4P – FLAP"},{"text":"byte_size_I2P Function Source File IR_Precision.f90 IR_Precision byte_size_I2P","tags":"","loc":"proc/byte_size_i2p.html","title":"byte_size_I2P – FLAP"},{"text":"byte_size_I1P Function Source File IR_Precision.f90 IR_Precision byte_size_I1P","tags":"","loc":"proc/byte_size_i1p.html","title":"byte_size_I1P – FLAP"},{"text":"byte_size_R16P Function Source File IR_Precision.f90 IR_Precision byte_size_R16P","tags":"","loc":"proc/byte_size_r16p.html","title":"byte_size_R16P – FLAP"},{"text":"byte_size_R8P Function Source File IR_Precision.f90 IR_Precision byte_size_R8P","tags":"","loc":"proc/byte_size_r8p.html","title":"byte_size_R8P – FLAP"},{"text":"byte_size_R4P Function Source File IR_Precision.f90 IR_Precision byte_size_R4P","tags":"","loc":"proc/byte_size_r4p.html","title":"byte_size_R4P – FLAP"},{"text":"byte_size_chr Function Source File IR_Precision.f90 IR_Precision byte_size_chr","tags":"","loc":"proc/byte_size_chr.html","title":"byte_size_chr – FLAP"},{"text":"strf_R16P Function Source File IR_Precision.f90 IR_Precision strf_R16P","tags":"","loc":"proc/strf_r16p.html","title":"strf_R16P – FLAP"},{"text":"strf_R8P Function Source File IR_Precision.f90 IR_Precision strf_R8P","tags":"","loc":"proc/strf_r8p.html","title":"strf_R8P – FLAP"},{"text":"strf_R4P Function Source File IR_Precision.f90 IR_Precision strf_R4P","tags":"","loc":"proc/strf_r4p.html","title":"strf_R4P – FLAP"},{"text":"strf_I8P Function Source File IR_Precision.f90 IR_Precision strf_I8P","tags":"","loc":"proc/strf_i8p.html","title":"strf_I8P – FLAP"},{"text":"strf_I4P Function Source File IR_Precision.f90 IR_Precision strf_I4P","tags":"","loc":"proc/strf_i4p.html","title":"strf_I4P – FLAP"},{"text":"strf_I2P Function Source File IR_Precision.f90 IR_Precision strf_I2P","tags":"","loc":"proc/strf_i2p.html","title":"strf_I2P – FLAP"},{"text":"strf_I1P Function Source File IR_Precision.f90 IR_Precision strf_I1P","tags":"","loc":"proc/strf_i1p.html","title":"strf_I1P – FLAP"},{"text":"str_R16P Function Source File IR_Precision.f90 IR_Precision str_R16P","tags":"","loc":"proc/str_r16p.html","title":"str_R16P – FLAP"},{"text":"str_R8P Function Source File IR_Precision.f90 IR_Precision str_R8P","tags":"","loc":"proc/str_r8p.html","title":"str_R8P – FLAP"},{"text":"str_R4P Function Source File IR_Precision.f90 IR_Precision str_R4P","tags":"","loc":"proc/str_r4p.html","title":"str_R4P – FLAP"},{"text":"str_I8P Function Source File IR_Precision.f90 IR_Precision str_I8P","tags":"","loc":"proc/str_i8p.html","title":"str_I8P – FLAP"},{"text":"str_I4P Function Source File IR_Precision.f90 IR_Precision str_I4P","tags":"","loc":"proc/str_i4p.html","title":"str_I4P – FLAP"},{"text":"str_I2P Function Source File IR_Precision.f90 IR_Precision str_I2P","tags":"","loc":"proc/str_i2p.html","title":"str_I2P – FLAP"},{"text":"str_I1P Function Source File IR_Precision.f90 IR_Precision str_I1P","tags":"","loc":"proc/str_i1p.html","title":"str_I1P – FLAP"},{"text":"strz_I8P Function Source File IR_Precision.f90 IR_Precision strz_I8P","tags":"","loc":"proc/strz_i8p.html","title":"strz_I8P – FLAP"},{"text":"strz_I4P Function Source File IR_Precision.f90 IR_Precision strz_I4P","tags":"","loc":"proc/strz_i4p.html","title":"strz_I4P – FLAP"},{"text":"strz_I2P Function Source File IR_Precision.f90 IR_Precision strz_I2P","tags":"","loc":"proc/strz_i2p.html","title":"strz_I2P – FLAP"},{"text":"strz_I1P Function Source File IR_Precision.f90 IR_Precision strz_I1P","tags":"","loc":"proc/strz_i1p.html","title":"strz_I1P – FLAP"},{"text":"ctor_R16P Function Source File IR_Precision.f90 IR_Precision ctor_R16P","tags":"","loc":"proc/ctor_r16p.html","title":"ctor_R16P – FLAP"},{"text":"ctor_R8P Function Source File IR_Precision.f90 IR_Precision ctor_R8P","tags":"","loc":"proc/ctor_r8p.html","title":"ctor_R8P – FLAP"},{"text":"ctor_R4P Function Source File IR_Precision.f90 IR_Precision ctor_R4P","tags":"","loc":"proc/ctor_r4p.html","title":"ctor_R4P – FLAP"},{"text":"ctoi_I8P Function Source File IR_Precision.f90 IR_Precision ctoi_I8P","tags":"","loc":"proc/ctoi_i8p.html","title":"ctoi_I8P – FLAP"},{"text":"ctoi_I4P Function Source File IR_Precision.f90 IR_Precision ctoi_I4P","tags":"","loc":"proc/ctoi_i4p.html","title":"ctoi_I4P – FLAP"},{"text":"ctoi_I2P Function Source File IR_Precision.f90 IR_Precision ctoi_I2P","tags":"","loc":"proc/ctoi_i2p.html","title":"ctoi_I2P – FLAP"},{"text":"ctoi_I1P Function Source File IR_Precision.f90 IR_Precision ctoi_I1P","tags":"","loc":"proc/ctoi_i1p.html","title":"ctoi_I1P – FLAP"},{"text":"bstr_R16P Function Source File IR_Precision.f90 IR_Precision bstr_R16P","tags":"","loc":"proc/bstr_r16p.html","title":"bstr_R16P – FLAP"},{"text":"bstr_R8P Function Source File IR_Precision.f90 IR_Precision bstr_R8P","tags":"","loc":"proc/bstr_r8p.html","title":"bstr_R8P – FLAP"},{"text":"bstr_R4P Function Source File IR_Precision.f90 IR_Precision bstr_R4P","tags":"","loc":"proc/bstr_r4p.html","title":"bstr_R4P – FLAP"},{"text":"bstr_I8P Function Source File IR_Precision.f90 IR_Precision bstr_I8P","tags":"","loc":"proc/bstr_i8p.html","title":"bstr_I8P – FLAP"},{"text":"bstr_I4P Function Source File IR_Precision.f90 IR_Precision bstr_I4P","tags":"","loc":"proc/bstr_i4p.html","title":"bstr_I4P – FLAP"},{"text":"bstr_I2P Function Source File IR_Precision.f90 IR_Precision bstr_I2P","tags":"","loc":"proc/bstr_i2p.html","title":"bstr_I2P – FLAP"},{"text":"bstr_I1P Function Source File IR_Precision.f90 IR_Precision bstr_I1P","tags":"","loc":"proc/bstr_i1p.html","title":"bstr_I1P – FLAP"},{"text":"bctor_R8P Function Source File IR_Precision.f90 IR_Precision bctor_R8P","tags":"","loc":"proc/bctor_r8p.html","title":"bctor_R8P – FLAP"},{"text":"bctor_R4P Function Source File IR_Precision.f90 IR_Precision bctor_R4P","tags":"","loc":"proc/bctor_r4p.html","title":"bctor_R4P – FLAP"},{"text":"bctoi_I8P Function Source File IR_Precision.f90 IR_Precision bctoi_I8P","tags":"","loc":"proc/bctoi_i8p.html","title":"bctoi_I8P – FLAP"},{"text":"bctoi_I4P Function Source File IR_Precision.f90 IR_Precision bctoi_I4P","tags":"","loc":"proc/bctoi_i4p.html","title":"bctoi_I4P – FLAP"},{"text":"bctoi_I2P Function Source File IR_Precision.f90 IR_Precision bctoi_I2P","tags":"","loc":"proc/bctoi_i2p.html","title":"bctoi_I2P – FLAP"},{"text":"bctoi_I1P Function Source File IR_Precision.f90 IR_Precision bctoi_I1P","tags":"","loc":"proc/bctoi_i1p.html","title":"bctoi_I1P – FLAP"},{"text":"digit_I8 Function Source File IR_Precision.f90 IR_Precision digit_I8","tags":"","loc":"proc/digit_i8.html","title":"digit_I8 – FLAP"},{"text":"digit_I4 Function Source File IR_Precision.f90 IR_Precision digit_I4","tags":"","loc":"proc/digit_i4.html","title":"digit_I4 – FLAP"},{"text":"digit_I2 Function Source File IR_Precision.f90 IR_Precision digit_I2","tags":"","loc":"proc/digit_i2.html","title":"digit_I2 – FLAP"},{"text":"digit_I1 Function Source File IR_Precision.f90 IR_Precision digit_I1","tags":"","loc":"proc/digit_i1.html","title":"digit_I1 – FLAP"},{"text":"check_endian Subroutine Source File IR_Precision.f90 IR_Precision check_endian","tags":"","loc":"proc/check_endian.html","title":"check_endian – FLAP"},{"text":"IR_init Subroutine Source File IR_Precision.f90 IR_Precision IR_init","tags":"","loc":"proc/ir_init.html","title":"IR_init – FLAP"},{"text":"IR_Print Subroutine Source File IR_Precision.f90 IR_Precision IR_Print","tags":"","loc":"proc/ir_print.html","title":"IR_Print – FLAP"},{"text":"bit_size Interface Source File IR_Precision.f90 IR_Precision bit_size","tags":"","loc":"interface/bit_size.html","title":"bit_size – FLAP"},{"text":"byte_size Interface Source File IR_Precision.f90 IR_Precision byte_size","tags":"","loc":"interface/byte_size.html","title":"byte_size – FLAP"},{"text":"str Interface Source File IR_Precision.f90 IR_Precision str","tags":"","loc":"interface/str.html","title":"str – FLAP"},{"text":"strz Interface Source File IR_Precision.f90 IR_Precision strz","tags":"","loc":"interface/strz.html","title":"strz – FLAP"},{"text":"cton Interface Source File IR_Precision.f90 IR_Precision cton","tags":"","loc":"interface/cton.html","title":"cton – FLAP"},{"text":"bstr Interface Source File IR_Precision.f90 IR_Precision bstr","tags":"","loc":"interface/bstr.html","title":"bstr – FLAP"},{"text":"bcton Interface Source File IR_Precision.f90 IR_Precision bcton","tags":"","loc":"interface/bcton.html","title":"bcton – FLAP"},{"text":"digit Interface Source File IR_Precision.f90 IR_Precision digit","tags":"","loc":"interface/digit.html","title":"digit – FLAP"},{"text":"re_match Function Source File Lib_Strings.f90 Lib_Strings re_match","tags":"","loc":"proc/re_match.html","title":"re_match – FLAP"},{"text":"Upper_Case Function Source File Lib_Strings.f90 Lib_Strings Upper_Case","tags":"","loc":"proc/upper_case.html","title":"Upper_Case – FLAP"},{"text":"Lower_Case Function Source File Lib_Strings.f90 Lib_Strings Lower_Case","tags":"","loc":"proc/lower_case.html","title":"Lower_Case – FLAP"},{"text":"delete Function Source File Lib_Strings.f90 Lib_Strings delete","tags":"","loc":"proc/delete.html","title":"delete – FLAP"},{"text":"insert Function Source File Lib_Strings.f90 Lib_Strings insert","tags":"","loc":"proc/insert.html","title":"insert – FLAP"},{"text":"replace Function Source File Lib_Strings.f90 Lib_Strings replace","tags":"","loc":"proc/replace.html","title":"replace – FLAP"},{"text":"unique Function Source File Lib_Strings.f90 Lib_Strings unique","tags":"","loc":"proc/unique.html","title":"unique – FLAP"},{"text":"count_substring Function Source File Lib_Strings.f90 Lib_Strings count_substring","tags":"","loc":"proc/count_substring.html","title":"count_substring – FLAP"},{"text":"tokenize Subroutine Source File Lib_Strings.f90 Lib_Strings tokenize","tags":"","loc":"proc/tokenize.html","title":"tokenize – FLAP"},{"text":"tags_match Subroutine Source File Lib_Strings.f90 Lib_Strings tags_match","tags":"","loc":"proc/tags_match.html","title":"tags_match – FLAP"},{"text":"count Interface Source File Lib_Strings.f90 Lib_Strings count","tags":"","loc":"interface/count.html","title":"count – FLAP"},{"text":"passed Function Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface passed","tags":"","loc":"proc/passed.html","title":"passed – FLAP"},{"text":"free_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface free_cla","tags":"","loc":"proc/free_cla.html","title":"free_cla – FLAP"},{"text":"finalize_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface finalize_cla","tags":"","loc":"proc/finalize_cla.html","title":"finalize_cla – FLAP"},{"text":"check_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface check_cla","tags":"","loc":"proc/check_cla.html","title":"check_cla – FLAP"},{"text":"check_choices_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface check_choices_cla","tags":"","loc":"proc/check_choices_cla.html","title":"check_choices_cla – FLAP"},{"text":"get_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface get_cla","tags":"","loc":"proc/get_cla.html","title":"get_cla – FLAP"},{"text":"get_cla_list Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface get_cla_list","tags":"","loc":"proc/get_cla_list.html","title":"get_cla_list – FLAP"},{"text":"print_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface print_cla","tags":"","loc":"proc/print_cla.html","title":"print_cla – FLAP"},{"text":"add_signature Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface add_signature","tags":"","loc":"proc/add_signature.html","title":"add_signature – FLAP"},{"text":"assign_cla Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface assign_cla","tags":"","loc":"proc/assign_cla.html","title":"assign_cla – FLAP"},{"text":"free Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface free","tags":"","loc":"proc/free.html","title":"free – FLAP"},{"text":"finalize Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface finalize","tags":"","loc":"proc/finalize.html","title":"finalize – FLAP"},{"text":"init Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface init","tags":"","loc":"proc/init.html","title":"init – FLAP"},{"text":"add Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface add","tags":"","loc":"proc/add.html","title":"add – FLAP"},{"text":"check Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface check","tags":"","loc":"proc/check.html","title":"check – FLAP"},{"text":"parse Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface parse","tags":"","loc":"proc/parse.html","title":"parse – FLAP"},{"text":"get_cla_cli Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface get_cla_cli","tags":"","loc":"proc/get_cla_cli.html","title":"get_cla_cli – FLAP"},{"text":"get_cla_list_cli Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface get_cla_list_cli","tags":"","loc":"proc/get_cla_list_cli.html","title":"get_cla_list_cli – FLAP"},{"text":"assign_cli Subroutine Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface assign_cli","tags":"","loc":"proc/assign_cli.html","title":"assign_cli – FLAP"},{"text":"Get_Unit Function Source File Lib_IO_Misc.f90 Lib_IO_Misc Get_Unit","tags":"","loc":"proc/get_unit.html","title":"Get_Unit – FLAP"},{"text":"get_extension Function Source File Lib_IO_Misc.f90 Lib_IO_Misc get_extension","tags":"","loc":"proc/get_extension.html","title":"get_extension – FLAP"},{"text":"set_extension Function Source File Lib_IO_Misc.f90 Lib_IO_Misc set_extension","tags":"","loc":"proc/set_extension.html","title":"set_extension – FLAP"},{"text":"lc_file Function Source File Lib_IO_Misc.f90 Lib_IO_Misc lc_file","tags":"","loc":"proc/lc_file.html","title":"lc_file – FLAP"},{"text":"File_Not_Found Function Source File Lib_IO_Misc.f90 Lib_IO_Misc File_Not_Found","tags":"","loc":"proc/file_not_found.html","title":"File_Not_Found – FLAP"},{"text":"Dir_Not_Found Function Source File Lib_IO_Misc.f90 Lib_IO_Misc Dir_Not_Found","tags":"","loc":"proc/dir_not_found.html","title":"Dir_Not_Found – FLAP"},{"text":"read_file_as_stream Subroutine Source File Lib_IO_Misc.f90 Lib_IO_Misc read_file_as_stream","tags":"","loc":"proc/read_file_as_stream.html","title":"read_file_as_stream – FLAP"},{"text":"inquire_file Subroutine Source File Lib_IO_Misc.f90 Lib_IO_Misc inquire_file","tags":"","loc":"proc/inquire_file.html","title":"inquire_file – FLAP"},{"text":"inquire_dir Subroutine Source File Lib_IO_Misc.f90 Lib_IO_Misc inquire_dir","tags":"","loc":"proc/inquire_dir.html","title":"inquire_dir – FLAP"},{"text":"IR_Precision Module Source File IR_Precision.f90 IR_Precision","tags":"","loc":"module/ir_precision.html","title":"IR_Precision – FLAP"},{"text":"Lib_Strings Module Source File Lib_Strings.f90 Lib_Strings","tags":"","loc":"module/lib_strings.html","title":"Lib_Strings – FLAP"},{"text":"Data_Type_Command_Line_Interface Module Source File Data_Type_Command_Line_Interface.f90 Data_Type_Command_Line_Interface","tags":"","loc":"module/data_type_command_line_interface.html","title":"Data_Type_Command_Line_Interface – FLAP"},{"text":"Lib_IO_Misc Module Source File Lib_IO_Misc.f90 Lib_IO_Misc","tags":"","loc":"module/lib_io_misc.html","title":"Lib_IO_Misc – FLAP"},{"text":"FLAP_Test Program Source File flap_test.f90 FLAP_Test","tags":"","loc":"program/flap_test.html","title":"FLAP_Test – FLAP"}]}