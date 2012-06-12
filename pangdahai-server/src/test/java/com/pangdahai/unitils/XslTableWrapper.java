package com.pangdahai.unitils;

import org.apache.commons.lang.StringUtils;
import org.dbunit.dataset.*;
import org.unitils.core.UnitilsException;

/**
 * @author gsj
 *         email:t06000020@hongtu56.com
 * @Description 描述一下这个文件
 * @Date 12-6-11上午11:03
 * @since 1.0.0
 */
public class XslTableWrapper extends AbstractTable {
    private ITable delegate;
    private String tableName;

    public XslTableWrapper(String tableName, ITable table) {
        this.delegate = table;
        this.tableName = tableName;
    }

    public int getRowCount() {
        return delegate.getRowCount();
    }

    public ITableMetaData getTableMetaData() {
        ITableMetaData meta = delegate.getTableMetaData();
        try {
            return new DefaultTableMetaData(tableName, meta.getColumns(),
                    meta.getPrimaryKeys());
        } catch (DataSetException e) {
            throw new UnitilsException("Don't get the meta info from  " + meta,
                    e);
        }
    }

    public Object getValue(int row, String column) throws DataSetException {
        Object delta = delegate.getValue(row, column);
        if (delta instanceof String) {
            if (StringUtils.isEmpty((String) delta)) {
                return null;
            }
        }
        return delta;
    }
}
