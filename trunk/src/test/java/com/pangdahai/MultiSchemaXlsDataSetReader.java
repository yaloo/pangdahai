package com.pangdahai;

import com.google.common.collect.Maps;
import org.dbunit.database.AmbiguousTableNameException;
import org.dbunit.dataset.DataSetException;
import org.dbunit.dataset.DefaultDataSet;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.ITable;
import org.dbunit.dataset.excel.XlsDataSet;
import org.unitils.core.UnitilsException;
import org.unitils.dbunit.util.MultiSchemaDataSet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * @author gsj
 *         email:t06000020@hongtu56.com
 * @Description 描述一下这个文件
 * @Date 12-6-8下午5:05
 * @since 1.0.0
 */
public class MultiSchemaXlsDataSetReader {
    private String defaultSchemaName;

    public MultiSchemaXlsDataSetReader(String defaultSchemaName) {
        this.defaultSchemaName = defaultSchemaName;
    }
    // Excel数据集读取器
    public MultiSchemaDataSet readDataSetXls(File... dataSetFiles) {
        try {
            Map<String, List<ITable>> tableMap = getTables(dataSetFiles);
            MultiSchemaDataSet dataSets = new MultiSchemaDataSet();
            for (Map.Entry<String, List<ITable>> entry : tableMap.entrySet()) {
                List<ITable> tables = entry.getValue();
                try {
                    DefaultDataSet ds = new DefaultDataSet(tables
                            .toArray(new ITable[] {}));
                    dataSets.setDataSetForSchema(entry.getKey(), ds);
                } catch (AmbiguousTableNameException e) {
                    throw new UnitilsException("构造DataSet失败!",  e);
                }
            }
            return dataSets;
        } catch (Exception e) {
            throw new UnitilsException("解析EXCEL文件出错：", e);
        }
    }

    private Map<String, List<ITable>> getTables(File... dataSetFiles) {
        Map<String, List<ITable>> tableMap = Maps.newConcurrentMap();
        for (File file : dataSetFiles) {
            try {
                IDataSet dataSet = new XlsDataSet(new FileInputStream(file));

            } catch (IOException e) {
            } catch (DataSetException e) {
            }
        }
        return null;
    }
}
